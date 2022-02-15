import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  Optional,
  SkipSelf,
  Type,
} from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CommonStoreModule } from '@pinguin/common';

import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { ROUTER_FEATURE_KEY } from './constants';
import { CoreRouterStateSerializer } from './serializers';
import { IssuesFieldsEffects, IssuesLabelsEffects } from './effects';

import { CORE_ENTITY_ROOT_REDUCER } from './core.tokens';
import { coreEntityRootStoreConfig } from './core.providers';

@NgModule({
  imports: [
    // Common module for reactive component module.
    CommonStoreModule,

    // Provide core store reducers.
    StoreModule.forRoot(CORE_ENTITY_ROOT_REDUCER, coreEntityRootStoreConfig),
    EffectsModule.forRoot(
      new Array<Type<unknown>>(IssuesLabelsEffects, IssuesFieldsEffects),
    ),
    StoreRouterConnectingModule.forRoot({
      stateKey: ROUTER_FEATURE_KEY,
      serializer: CoreRouterStateSerializer,
    }),
  ],
  providers: [IssuesLabelsEffects, IssuesFieldsEffects],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreStoreModule {
  public constructor(
    @SkipSelf()
    @Optional()
    private readonly internalModule?: CoreStoreModule,
  ) {
    // const render = renderFactory.createRenderer(window, null);
    // render.listen(window, 'online', () => {
    //   console.log('ONLINE');
    // });
    // render.listen(window, 'offline', () => {
    //   console.log('OFFLINE');
    // });
  }
}
