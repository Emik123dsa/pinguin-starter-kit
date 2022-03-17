import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Observable, share, Subject, Subscription } from 'rxjs';
import { ShareConfig } from 'rxjs/internal/operators/share';
import { WebWorkerFactory, WebWorkerHandler } from '../handlers';
import { WebWorkerOptions } from '../interfaces';

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
   * Get reactive connection of web worker instance.
   *
   * @private
   * @type {!Observable<unknown>}
   */
  private connection$!: Observable<unknown>;

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
    private readonly webWorkerFactory: WebWorkerFactory,
    private readonly ngZone: NgZone,
  ) {}

  /**
   * Init instance of worker connection.
   *
   * @public
   * @param {string} scriptUrl
   * @param {?WorkerOptions} [options]
   */
  public connect({ workerUrl }: WebWorkerOptions, options?: WorkerOptions) {
    const webWorker: Worker = this.webWorkerFactory.createWorker(
      workerUrl,
      options,
    ) as Worker;

    this.webWorkerHandler = new WebWorkerHandler(this.ngZone, webWorker);
  }

  /**
   * Init worker handler connection.
   *
   * @private
   */
  public init(): void {
    const workerConfig: ShareConfig<unknown> = {
      connector: () => new Subject<unknown>(),
      resetOnError: true,
      resetOnComplete: false,
      resetOnRefCountZero: false,
    };

    this.connection$ = this.webWorkerHandler
      .connection$()
      .pipe(share(workerConfig));

    this.subscription.add(this.connection$.subscribe());
  }

  /**
   * Send message to `WebWorker` dispatcher.
   *
   * @public
   * @param {string} message
   */
  public publishMessage(message: string): void {
    <void>this.webWorkerHandler.sendMessage(message);
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
