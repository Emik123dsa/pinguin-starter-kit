import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { AppBaseModule } from '../base';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [],
  imports: [
    AppBaseModule,
    ServerModule,
    ServerTransferStateModule,
    NoopAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
