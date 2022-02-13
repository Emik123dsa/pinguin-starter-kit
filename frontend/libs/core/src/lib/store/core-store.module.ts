import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveComponentModule } from '@ngrx/component';

import {
  StoreRouterConnectingModule,
  DefaultRouterStateSerializer,
} from '@ngrx/router-store';

import { CORE_ROUTER_STATE_KEY } from './constants';

@NgModule({
  imports: [
    CommonModule,
    ReactiveComponentModule,
    StoreRouterConnectingModule.forRoot({
      stateKey: CORE_ROUTER_STATE_KEY,
      serializer: DefaultRouterStateSerializer,
    }),
  ],
  declarations: [],
  exports: [CommonModule, ReactiveComponentModule, StoreRouterConnectingModule],
})
export class CoreStoreModule {}
