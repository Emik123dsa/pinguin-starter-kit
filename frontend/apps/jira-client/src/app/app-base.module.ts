import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonBaseModule } from '@pinguin/common';

import { ClientEnvironmentModule } from '@pinguin/environment';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonBaseModule,
    ClientEnvironmentModule.forRoot(environment),
    BrowserModule.withServerTransition({ appId: environment.environment }),
  ],
  schemas: [],
  providers: [],
})
export class AppBaseModule {}
