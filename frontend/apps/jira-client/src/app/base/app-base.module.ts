import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuicklinkModule } from 'ngx-quicklink';
import { CommonBaseModule } from '@pinguin/common';
import { ClientEnvironmentModule } from '@pinguin/environment';
import { SharedModule } from '@pinguin/shared';
// import {} from 'angular-in-memory-web-api';

import { AppComponent } from '../app.component';

import { AppRoutingModule } from '../app-routing.module';

import { environment } from 'apps/jira-client/src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ClientEnvironmentModule.forRoot(environment),
    BrowserModule.withServerTransition({ appId: environment.environment }),

    QuicklinkModule,
    AppRoutingModule,

    SharedModule,
    CommonBaseModule,
  ],
  schemas: [],
  providers: [],
})
export class AppBaseModule {}
