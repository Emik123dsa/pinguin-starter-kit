import {
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';

import { WINDOW } from '../tokens';

import { COMMON_FEATURE_KEY } from './common.constants';
import {
  COMMON_FEATURE_CONFIG,
  COMMON_FEATURE_REDUCER,
} from './common.tokens';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    // Common module for reactive component module.
    CommonModule,
    ReactiveComponentModule,
    StoreModule.forFeature(
      COMMON_FEATURE_KEY,
      COMMON_FEATURE_REDUCER,
      COMMON_FEATURE_CONFIG,
    ),
    EffectsModule.forFeature(),
  ],
  declarations: [],
  exports: [CommonModule, ReactiveComponentModule, StoreModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommonStoreModule {
  public constructor(
    @SkipSelf()
    @Optional()
    private readonly internalModule?: CommonStoreModule,
    @Inject(ANIMATION_MODULE_TYPE)
    @Optional()
    private readonly animationMode?: object,
    @Inject(WINDOW)
    @Optional()
    private readonly window?: Window & typeof globalThis,
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
