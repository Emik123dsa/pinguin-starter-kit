import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
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
export class CoreStoreModule {
  public constructor(private readonly renderFactory: RendererFactory2) {
    const render = renderFactory.createRenderer(window, null);

    render.listen(window, 'online', () => {
      console.log('ONLINE');
    });

    render.listen(window, 'offline', () => {
      console.log('OFFLINE');
    });
  }
}
