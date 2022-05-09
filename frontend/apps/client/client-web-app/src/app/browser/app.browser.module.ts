/* eslint-disable no-restricted-syntax */
import {
  ApplicationRef,
  ComponentRef,
  DoBootstrap,
  NgModule,
} from '@angular/core';
import {
  concat,
  distinctUntilChanged,
  first,
  interval,
  Observable,
  share,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { BrowserTransferStateModule } from '@angular/platform-browser';
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
    BrowserTransferStateModule,
    environment.runtimePlugins,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      scope: '/',
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [APP_BROWSER_PROVIDERS],
  schemas: [],
  bootstrap: [],
})
export class AppBrowserModule implements DoBootstrap {
  /**
   * Stable polling interval for application ref.
   *
   * @private
   * @type {number}
   */
  private readonly pollingInterval: Readonly<number> = 1000;

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

    // NOTE: Currently implemented only with console.time method.
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
    const pollingInterval$: Observable<number> = interval(this.pollingInterval);

    const isStable$: Observable<boolean | number> =
      applicationRef.isStable.pipe(
        first((stable) => stable),
        tap(callback),
        switchMap(() => pollingInterval$),
      );

    const pollingIsStable$: Observable<number | boolean> = concat(
      isStable$,
    ).pipe(
      share({
        connector: () => new Subject<number | boolean>(),
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: false,
      }),
      distinctUntilChanged(),
    );

    pollingIsStable$.subscribe();
  }
}
