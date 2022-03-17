import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { AppBaseModule } from '@pinguin-client/base';
import { AppComponent } from '@pinguin-client/app.component';

@NgModule({
  declarations: [],
  imports: [
    AppBaseModule,
    ServerModule,
    ServerTransferStateModule,
    NoopAnimationsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
