import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QuicklinkModule } from 'ngx-quicklink';

import { CoreModule } from '@pinguin/core';
import { CommonBaseModule } from '@pinguin/common';
import { SharedModule } from '@pinguin/shared';
import { ClientEnvironmentModule } from '@pinguin/environment';

import { APP_BASE_PROVIDERS } from './app-base.providers';

import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';

import { environment } from '../../environments/environment';
import { ClientConfigModule } from '@pinguin/config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: environment.app.id }),
    ClientEnvironmentModule.forRoot(environment),
    ClientConfigModule,
    CommonBaseModule,
    QuicklinkModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
  ],
  providers: [APP_BASE_PROVIDERS],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppBaseModule {}
