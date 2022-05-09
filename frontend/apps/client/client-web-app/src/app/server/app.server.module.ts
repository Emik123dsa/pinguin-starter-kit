import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { AppBaseModule } from '@pinguin-client/base';
import { AppComponent } from '@pinguin-client/app.component';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

@NgModule({
  declarations: [],
  imports: [
    ServerModule,
    AppBaseModule,
    FlexLayoutServerModule,
    NoopAnimationsModule,
    ServerTransferStateModule,
  ],
  schemas: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
