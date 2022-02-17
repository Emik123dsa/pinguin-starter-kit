import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../../environments/environment';

import { AppBaseModule } from '../base';
import { AppComponent } from '../app.component';

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
  schemas: [],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
