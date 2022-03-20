import {
  Inject,
  Injectable,
  NgZone,
  OnDestroy,
  Optional,
  Renderer2,
  RendererFactory2,
  RendererType2,
  ViewEncapsulation,
} from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import {
  distinctUntilChanged,
  merge,
  Observable,
  Observer,
  of,
  share,
  Subject,
  Subscription,
} from 'rxjs';
import { WINDOW } from '../tokens';
import { CLIENT_WINDOW, NetworkStatus } from '../constants';
import { runInZone } from '@pinguin/utils';
import { NetworkStatusEvent } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ClientCommonHandler implements OnDestroy {
  /**
   * Initialize the instance of renderer to
   * provide window factory.
   *
   * @private
   * @type {!Renderer2}
   */
  private renderer!: Renderer2;

  /**
   * Subscriptions to listen all of the
   * created services inside handler.
   *
   * @private
   * @type {Subscription}
   */
  private subscriptions: Subscription[] = [];

  /**
   * Creates an instance of CommonHandler.
   *
   * @constructor
   * @public
   * @param {(Window & typeof globalThis)} window
   * @param {object} animationMode
   * @param {RendererFactory2} rendererFactory
   */
  public constructor(
    private readonly ngZone: NgZone,
    @Optional()
    @Inject(WINDOW)
    private readonly window: Window & typeof globalThis,
    @Optional()
    @Inject(ANIMATION_MODULE_TYPE)
    private readonly animationMode: object,
    @Optional()
    private readonly rendererFactory: RendererFactory2,
  ) {
    const rendererOptions: RendererType2 = {
      id: CLIENT_WINDOW,
      data: {},
      styles: new Array<string>(),
      encapsulation: ViewEncapsulation.None,
    };

    // Whether render factory was created renderer instance to listen window events.
    this.renderer = this.rendererFactory.createRenderer(
      this.window,
      rendererOptions,
    );
  }

  /**
   * Description placeholder
   *
   * @private
   */
  public init(): void {
    this.handleNetworkStatus((status: boolean) => {
      console.log(
        `Browser context was initialized with [networkStatus]: ${
          status ? NetworkStatus.ONLINE : NetworkStatus.OFFLINE
        }`,
      );
    });
  }

  /**
   * Handle networking status with callback.
   *
   * @private
   * @param {(status: boolean) => void} callback
   * @returns {void) => void}
   */
  public handleNetworkStatus(callback: (status: boolean) => void): void {
    const currentNetwork$: Observable<boolean> = of(
      this.window.navigator.onLine,
    );

    const networkEvents$: Observable<boolean> = new Observable(
      (observer: Observer<boolean>) => {
        const onOnlineStatus = (event: NetworkStatusEvent) => {
          event.preventDefault();
          observer.next(true);
        };

        const onOfflineStatus = (event: NetworkStatusEvent) => {
          event.preventDefault();
          observer.next(false);
        };

        const networkHandlers: ReadonlyMap<
          NetworkStatus,
          (event: CustomEvent) => void
        > = new Map([
          [NetworkStatus.ONLINE, onOnlineStatus],
          [NetworkStatus.OFFLINE, onOfflineStatus],
        ]);

        networkHandlers.forEach((handler, status) =>
          this.renderer.listen(this.window, status, handler),
        );

        return () => observer.complete();
      },
    );

    const networkStatus$: Observable<boolean> = merge(
      currentNetwork$,
      networkEvents$.pipe(runInZone(this.ngZone)),
    ).pipe(
      share({
        connector: () => new Subject<boolean>(),
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: false,
      }),
      distinctUntilChanged(),
    );

    this.subscriptions.push(networkStatus$.subscribe(callback));
  }

  /**
   * Unsubscribe from internal
   * common client handler subscriptions.
   *
   * @public
   */
  public ngOnDestroy(): void {
    this.subscriptions
      .filter((subscription) => subscription && !subscription.closed)
      .forEach((subscription) => subscription.unsubscribe());
  }
}
