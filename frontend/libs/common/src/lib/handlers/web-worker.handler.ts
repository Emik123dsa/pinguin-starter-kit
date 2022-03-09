import { NgZone } from '@angular/core';
import { Observable, Subscriber, Subscription, take } from 'rxjs';
import { WebWorkerEventTypes } from '../constants';
import { WebWorkerEventListener } from '../interfaces';

/**
 * Web Worker simple handler, will be used along with `NgZone`
 * to track any messages outside angular zones.
 *
 * @export
 * @class WebWorkerHandler
 * @typedef {WebWorkerHandler}
 */
export class WebWorkerHandler {
  private readonly eventListenerMap: Map<
    WebWorkerEventTypes,
    WebWorkerEventListener
  > = new Map<WebWorkerEventTypes, WebWorkerEventListener>();

  /**
   * Creates an instance of WebWorkerHandler.
   *
   * @constructor
   * @public
   * @param {NgZone} ngZone
   * @param {Worker} webWorker
   */
  public constructor(
    private readonly ngZone: NgZone,
    private readonly webWorker: Worker,
  ) {
    this.initEventListeners();
  }

  /**
   * Handle message errors events inside of `WebWorker` internally.
   *
   * @protected
   * @template T
   * @param {Subscriber<T>} observer
   * @returns {({ data }: any) => void}
   */
  protected handleMessageErrorEvent<T>(
    observer: Subscriber<T>,
  ): ({ data }: MessageEvent<T>) => void {
    const callback = (data: T) => {
      observer.error(data);
      observer.complete();
    };
    return ({ data }: MessageEvent<T>) => {
      this.ngZone.run(() => callback(data));
    };
  }

  /**
   * Handle message events inside of `WebWorker` handler.
   *
   * @protected
   * @template T
   * @param {Subscriber<T>} observer
   * @returns {({ data }: any) => void}
   */
  protected handleMessageEvent<T>(
    observer: Subscriber<T>,
  ): ({ data }: MessageEvent<T>) => void {
    const callback = (data: T) => {
      observer.next(data);
    };
    return ({ data }: MessageEvent<T>) => {
      this.ngZone.run(() => callback(data));
    };
  }

  /**
   * Handle all of the `WebWorker` internal errors event.
   *
   * @protected
   * @template T
   * @param {Subscriber<T>} observer
   * @returns {(error: unknown) => void}
   */
  protected handleErrorEvent<T>(
    observer: Subscriber<T>,
  ): (error: ErrorEvent) => void {
    const callback = (error: ErrorEvent) => {
      observer.error(error);
      observer.complete();
    };

    return (error: ErrorEvent) => {
      this.ngZone.run(() => callback(error));
    };
  }

  /**
   * Register all of the possible event listeners names.
   * Handler will handle them until service will unsubscribed from the `NgZone`.
   *
   * @private
   */
  private initEventListeners() {
    this.eventListenerMap.set(WebWorkerEventTypes.ERROR, {
      handler: this.handleErrorEvent,
    });
    this.eventListenerMap.set(WebWorkerEventTypes.MESSAGE, {
      handler: this.handleMessageEvent,
    });
    this.eventListenerMap.set(WebWorkerEventTypes.MESSAGEERROR, {
      handler: this.handleMessageErrorEvent,
    });
  }

  /**
   * Dispatch message to `webWorker` instance.
   *
   * @public
   * @template T
   * @param {T} message
   * @param {?StructuredSerializeOptions} [options]
   */
  public dispatchMessage<T>(message: T): void {
    this.webWorker.postMessage(message);
  }

  /**
   * Create internal websocket connection.
   *
   * @private
   * @template T
   * @param {Subscriber<T>} observer
   */
  private createConnection<T>(observer: Subscriber<T>) {
    this.ngZone.runOutsideAngular(() => {
      const eventListeners: {
        name: WebWorkerEventTypes;
        handler: (event: MessageEvent<T> & ErrorEvent) => void;
      }[] = Array.from(this.eventListenerMap, ([name, value]) => ({
        name,
        handler: value.handler(observer),
      }));

      /**
       * Register all of the possible events
       * inside `WebWorker` runtime, this helper will allow us
       * to get rid of idea to handle same functions in the `removeEventListener`.
       */
      const registerEventListeners = () => {
        for (const { name, handler } of eventListeners) {
          this.webWorker.addEventListener(
            name as WebWorkerEventTypes,
            handler as (event: Event) => void,
            false,
          );
        }
      };

      /**
       * Unregister all of the registered event listeners.
       * It will no longer listening, after service was hooked
       * by method `ngOnDestroy`.
       */
      const unregisterEventListeners = () => {
        for (const { name, handler } of eventListeners) {
          this.webWorker.removeEventListener(
            name as WebWorkerEventTypes,
            handler as (event: Event) => void,
            false,
          );
        }
      };

      /**
       * Whether worker of browser was provided, we will no longer
       * handle all of the worker messages in the case if `AppBrowserModule` will be destroyed.
       */
      const subscription: Subscription = this.ngZone.onStable
        .pipe(take(1))
        .subscribe(() => <void>registerEventListeners());

      // Teardown logic inside of component service, we will no
      // longer listener any browser worker event inside of the module.
      return () => {
        subscription.unsubscribe();
        // Unregister exactly internal worker listeners.
        <void>unregisterEventListeners();
        this.webWorker.terminate();
      };
    });
  }

  /**
   * Handle worker connection messaging.
   *
   * @public
   * @template T
   * @returns {*}
   */
  public connection$<T>(): Observable<T> {
    return new Observable<T>((observer: Subscriber<T>) => {
      return this.createConnection(observer);
    });
  }
}
