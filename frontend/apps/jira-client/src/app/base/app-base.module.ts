import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@pinguin/core';
import { ClientCommonModule } from '@pinguin/common';
import { SharedModule } from '@pinguin/shared';
import { RuntimeEnvironmentModule } from '@pinguin/environments';
import { ClientConfigModule } from '@pinguin/config';

import { environment } from '@pinguin-runtime/environment';

import { AppComponent } from '@pinguin-client/app.component';
import { AppRoutingModule } from '@pinguin-client/app-routing.module';

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

    // Provide environment runtime module for application.
    RuntimeEnvironmentModule.forRoot(environment),

    // Provide configuration client module.
    ClientConfigModule.forRoot(),

    // Provide common client module.
    // ClientCommonModule.forRoot(),

    // Provide shared client modules.
    SharedModule.forRoot(),

    // Provide routing client modules.
    AppRoutingModule,

    // Provide core essential module.
    CoreModule.forRoot(),
  ],
  providers: [APP_BASE_PROVIDERS],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppBaseModule {}
