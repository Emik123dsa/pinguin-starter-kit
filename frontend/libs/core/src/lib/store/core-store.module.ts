import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  Optional,
  SkipSelf,
  Type,
} from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {
  NavigationActionTiming,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';

import { ROUTER_FEATURE_KEY } from './constants';
import { CoreRouterStateSerializer } from './serializers';
import {
  IssuesFieldsEffects,
  IssuesLabelsEffects,
  RouterEffects,
} from './effects';

import { CORE_ENTITY_ROOT_REDUCER } from './core-store.tokens';
import { coreEntityRootConfig } from './core-store.providers';

@NgModule({
  declarations: [],
  imports: [
    // Provide core store reducers for initialization.
    StoreModule.forRoot(CORE_ENTITY_ROOT_REDUCER, coreEntityRootConfig),
    EffectsModule.forRoot(
      new Array<Type<unknown>>(
        RouterEffects,
        IssuesLabelsEffects,
        IssuesFieldsEffects,
      ),
    ),
    // Provide store router connecting module.
    StoreRouterConnectingModule.forRoot({
      stateKey: ROUTER_FEATURE_KEY,
      navigationActionTiming: NavigationActionTiming.PreActivation,
      serializer: CoreRouterStateSerializer,
    }),
  ],
  providers: [
    CoreRouterStateSerializer,
    RouterEffects,
    IssuesLabelsEffects,
    IssuesFieldsEffects,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreStoreModule {
  /**
   * TODO: handle any internal browser events,
   * will be refactored to the `common` module.
   *
   * # Example:
   * ```typescript
   * const render = renderFactory.createRenderer(window, null);
   * render.listen(window, 'online', () => {
   *   console.log('ONLINE');
   * });
   * render.listen(window, 'offline', () => {
   *   console.log('OFFLINE');
   * });
   * ```
   */
  public constructor(
    @SkipSelf()
    @Optional()
    private readonly internalModule?: CoreStoreModule,
  ) {}
}
