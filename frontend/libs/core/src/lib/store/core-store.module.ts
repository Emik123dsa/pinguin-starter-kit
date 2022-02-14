import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { CORE_ROUTER_STATE_KEY } from './constants';
import { getCoreReducer } from './reducers';
import { CoreRouterStateSerializer } from './serializers';

@NgModule({
  imports: [
    // Common module for reactive component module.
    CommonModule,
    ReactiveComponentModule,
    StoreModule.forRoot(getCoreReducer()),
    EffectsModule.forRoot(),
    StoreRouterConnectingModule.forRoot({
      stateKey: CORE_ROUTER_STATE_KEY,
      serializer: CoreRouterStateSerializer,
    }),
  ],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreStoreModule {}
