import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { connectable, Observable, share, Subject, Subscription } from 'rxjs';
import { ShareConfig } from 'rxjs/internal/operators/share';
import { WebWorkerFactory, WebWorkerHandler } from '../handlers';

@Injectable({
  providedIn: 'platform',
})
export class WebWorkerService implements OnDestroy {
  /**
   * Helper subscription will be used only for
   * holding current `WebWorker` connectivity.
   *
   * @private
   * @type {Subscription}
   */
  private subscription: Subscription = new Subscription();

  /**
   * An instance of `WebWorker` handler, which will be used
   * for communicating with workers.
   *
   * @private
   * @type {!WebWorkerHandler}
   */
  private webWorkerHandler!: WebWorkerHandler;

  /**
   * Creates an instance of WebWorkerService.
   *
   * @constructor
   * @public
   * @param {NgZone} ngZone
   * @param {WebWorkerFactory} webWorkerFactory
   */
  public constructor(
    private readonly ngZone: NgZone,
    private readonly webWorkerFactory: WebWorkerFactory,
  ) {}

  /**
   * Init instance of worker connection.
   *
   * @public
   * @param {string} scriptUrl
   * @param {?WorkerOptions} [options]
   */
  public connect(scriptUrl: string, options?: WorkerOptions) {
    const webWorker: Worker = this.webWorkerFactory.createWorker(
      scriptUrl,
      options,
    ) as Worker;

    this.webWorkerHandler = new WebWorkerHandler(this.ngZone, webWorker);

    this.initHandler();
  }

  /**
   * Init worker handler connection.
   *
   * @private
   */
  private initHandler(): void {
    const shareConfig: ShareConfig<unknown> = {
      connector: () => new Subject<unknown>(),
      resetOnError: true,
      resetOnRefCountZero: false,
    };

    const webWorkerHandler$ = connectable(
      this.webWorkerHandler.handleWorkerConnection().pipe(share(shareConfig)),
    );

    this.subscription.add(webWorkerHandler$.subscribe());

    <Subscription>webWorkerHandler$.connect();
  }

  /**
   * Send message to `WebWorker` dispatcher.
   *
   * @public
   * @param {string} message
   */
  public sendMessage(message: string): void {
    <void>this.webWorkerHandler.dispatchMessage(message);
  }

  /**
   * Unsubscribe from `WebWorker` handler.
   *
   * @public
   */
  public ngOnDestroy(): void {
    this.ngZone.run(() => {
      if (this.subscription && !this.subscription.closed) {
        this.subscription.unsubscribe();
      }
    });
  }
}
