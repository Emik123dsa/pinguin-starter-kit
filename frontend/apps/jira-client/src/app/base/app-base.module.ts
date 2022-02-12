import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { QuicklinkModule } from 'ngx-quicklink';

import { CoreModule } from '@pinguin/core';
import { ClientCommonModule } from '@pinguin/common';
import { ClientSharedModule } from '@pinguin/shared';
import { ClientEnvironmentModule } from '@pinguin/environment';
import { ClientConfigModule } from '@pinguin/config';
import { UiOverlayModule } from '@pinguin/ui-overlay';
import { UiFormsModule } from '@pinguin/ui-forms';

import { APP_BASE_PROVIDERS } from './app-base.providers';

import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';

import { environment } from '../../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: environment.app.id }),

    // Environment module for application.
    ClientEnvironmentModule.forRoot(environment),

    // Configuration module.
    ClientConfigModule.forRoot(),

    // Common module.
    ClientCommonModule.forRoot(),

    // Routing modules.
    QuicklinkModule,
    AppRoutingModule,

    // Shared modules.
    ClientSharedModule,

    // Provide core module.
    CoreModule.forRoot(),

    // Provide ui modules.
    UiFormsModule,
    UiOverlayModule,
  ],
  providers: [APP_BASE_PROVIDERS],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppBaseModule {}
