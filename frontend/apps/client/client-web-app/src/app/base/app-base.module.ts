/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RemoteEntryModule } from '../remote-entry/entry.module';

import { Inject, LOCALE_ID, NgModule, Self } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

// FIXME: logger module will no longer used here, should be implemented custom logging facade.
// import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { CoreModule } from '@pinguin/core';
import { SharedModule } from '@pinguin/shared';
import { ClientCommonModule } from '@pinguin/common';
import { ClientConfigModule } from '@pinguin/config';
import { RuntimeEnvironmentModule } from '@pinguin/environments';

import { environment } from '@pinguin-web-client-runtime/environment';

import { AppComponent } from '@pinguin-client/app.component';
import { AppRoutingModule } from '@pinguin-client/app-routing.module';
import { bootstrapLocaleModule } from '@pinguin-client/app-locale.providers';

import { APP_BASE_PROVIDERS } from './app-base.providers';

/**
 * Base module for bootstrapping application in
 * browser or server runtime context.
 *
 * @export
 * @class AppBaseModule
 * @author Emil Shari <emil.shari87@gmail.com>
 * @typedef {AppBaseModule}
 */
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: environment.app.id }),

    /* LoggerModule.forRoot({
      serverLoggingUrl: environment.api.baseUrl,
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR,
    }), */

    // Provide environment runtime module for application.
    RuntimeEnvironmentModule.forRoot(environment),

    // Provide configuration client module.
    ClientConfigModule.forRoot(),

    // Provide common client module.
    ClientCommonModule.forRoot(),

    // Provide shared client modules.
    SharedModule.forRoot(),

    // Provide routing client modules.
    AppRoutingModule,

    // Provide core essential module.
    CoreModule.forRoot(),
  ],
  providers: [APP_BASE_PROVIDERS],
  exports: [AppComponent],
  schemas: [],
})
export class AppBaseModule {
  /**
   * Creates an instance of AppBaseModule.
   *
   * @constructor
   * @public
   * @param {object} localeId
   */
  public constructor(@Self() @Inject(LOCALE_ID) readonly localeId: object) {
    bootstrapLocaleModule(localeId);
  }
}
