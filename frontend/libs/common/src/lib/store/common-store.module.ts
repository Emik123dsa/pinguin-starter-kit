import { NgModule, Optional, SkipSelf } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StringUtils } from '@pinguin/utils';

import { COMMON_FEATURE_KEY } from './common-store.constants';
import {
  COMMON_FEATURE_CONFIG,
  COMMON_FEATURE_REDUCER,
} from './common-store.tokens';

@NgModule({
  imports: [
    StoreModule.forFeature(
      COMMON_FEATURE_KEY,
      COMMON_FEATURE_REDUCER,
      COMMON_FEATURE_CONFIG,
    ),
    EffectsModule.forFeature(),
  ],
  providers: [],
})
export class CommonStoreModule {
  /**
   * Creates an instance of CommonStoreModule.
   *
   * @constructor
   * @public
   * @param {CommonStoreModule} parentModule
   * @param {ClientCommonHandler} commonHandler
   */
  public constructor(
    @Optional()
    @SkipSelf()
    private readonly parentModule?: CommonStoreModule,
  ) {
    // We will prevent any re-initialization of common store module.
    // Will be defined as a `Singleton` module in project runtime.
    if (this.parentModule) {
      const errorValue: string = StringUtils.format(
        '{name} has been already initialized as a module',
        CommonStoreModule,
      );

      throw new ReferenceError(errorValue);
    }
  }
}
