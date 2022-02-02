import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuicklinkModule } from 'ngx-quicklink';
import { CommonBaseModule } from '@pinguin/common';
import { ClientEnvironmentModule } from '@pinguin/environment';
import { SharedModule } from '@pinguin/shared';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    CommonBaseModule,
    QuicklinkModule,
    AppRoutingModule,
    ClientEnvironmentModule.forRoot(environment),
    BrowserModule.withServerTransition({ appId: environment.environment }),
  ],
  schemas: [],
  providers: [],
})
export class AppBaseModule {}
