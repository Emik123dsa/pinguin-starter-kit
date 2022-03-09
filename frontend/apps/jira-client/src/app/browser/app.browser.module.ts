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
  distinctUntilChanged,
  first,
  interval,
  NEVER,
  Observable,
  share,
  Subject,
  switchMap,
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

    this.handleOnceApplicationIsStable(applicationRef, () => {
      console.timeEnd('Browser application is stable. Elapsed');
    });
  }

  /**
   * Check whether the application ref is stable.
   *
   * @private
   * @param {ApplicationRef} applicationRef
   * @returns {*}
   */
  private handleOnceApplicationIsStable(
    applicationRef: ApplicationRef,
    callback: () => void,
  ): void {
    const pollingInterval$: Observable<number> = interval(
      this.stablePollingInterval,
    );

    const isStable$: Observable<boolean | number> =
      applicationRef.isStable.pipe(
        first((stable) => stable),
        tap(callback),
        switchMap(() => pollingInterval$),
      );

    const onceIsStable$: Observable<number | boolean> = concat(
      isStable$,
      NEVER,
    ).pipe(
      share({
        connector: () => new Subject<number | boolean>(),
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: false,
      }),
      distinctUntilChanged(),
    );

    onceIsStable$.subscribe();
  }
}
