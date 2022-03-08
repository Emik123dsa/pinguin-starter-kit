import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
