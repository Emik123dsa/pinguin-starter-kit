/* eslint-disable no-restricted-syntax */
import {
  ApplicationRef,
  ComponentRef,
  DoBootstrap,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import {
  concat,
  concatMap,
  Connectable,
  connectable,
  finalize,
  first,
  interval,
  NEVER,
  Observable,
  share,
  Subject,
  Subscription,
  switchMap,
  switchMapTo,
  tap,
} from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '@pinguin-runtime/environment';

import { AppBaseModule } from '@pinguin-client/base';
import { AppComponent } from '@pinguin-client/app.component';

import { APP_BROWSER_PROVIDERS } from './app.browser.providers';

@NgModule({
  imports: [
    AppBaseModule,
    BrowserAnimationsModule,
    environment.runtimePlugins,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [APP_BROWSER_PROVIDERS],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [],
})
export class AppBrowserModule implements DoBootstrap {
  /**
   * Stable polling interval for application ref.
   *
   * @private
   * @type {number}
   */
  private readonly stablePollingInterval: Readonly<number> = 1000;

  /**
   * Bootstrapping browser module.
   *
   * @public
   * @param {ApplicationRef} applicationRef
   */
  public ngDoBootstrap(applicationRef: ApplicationRef): void {
    <ComponentRef<AppComponent>>applicationRef.bootstrap(AppComponent);

    // TODO: implement `console-logger` service or any other service method
    // to log all of the application stable time to the backend.

    // HINT: Currently implemented only with console.time method.
    console.time('Browser application is stable. Elapsed');

    this.applicationIsStable$(applicationRef, () => {
      console.timeEnd('Browser application is stable. Elapsed');
    }).subscribe();
  }

  /**
   * Check whether the application ref is stable.
   *
   * @private
   * @param {ApplicationRef} applicationRef
   * @returns {*}
   */
  private applicationIsStable$(
    applicationRef: ApplicationRef,
    callback: () => void,
  ): Observable<number | boolean> {
    const pollingInterval$: Connectable<number> = connectable(
      interval(this.stablePollingInterval),
    );
    const isStable$: Observable<boolean> = applicationRef.isStable.pipe(
      first((stable) => stable),
      tap(callback),
    );

    return concat(isStable$, pollingInterval$, NEVER).pipe(
      tap(() => pollingInterval$.connect()),
      share({
        connector: () => new Subject<number | boolean>(),
        resetOnError: true,
      }),
    );
  }
}
