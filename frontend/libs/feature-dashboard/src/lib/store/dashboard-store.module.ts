import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonStoreModule } from '@pinguin/common';

import { DASHBOARD_FEATURE_KEY } from './dashboard-store.constants';
import {
  DASHBOARD_FEATURE_CONFIG,
  DASHBOARD_FEATURE_REDUCER,
} from './dashboard-store.tokens';

import { DASHBOARD_FEATURE_CONFIG_PROVIDER } from './dashboard-store.providers';

import { RoadmapPageEffects } from './effects';

@NgModule({
  imports: [
    CommonStoreModule,
    StoreModule.forFeature(
      DASHBOARD_FEATURE_KEY,
      DASHBOARD_FEATURE_REDUCER,
      DASHBOARD_FEATURE_CONFIG,
    ),
    EffectsModule.forFeature(new Array<Type<unknown>>(RoadmapPageEffects)),
  ],
  exports: [CommonStoreModule],
  providers: [RoadmapPageEffects],
})
export class DashboardStoreModule {
  public static forRoot(): ModuleWithProviders<DashboardStoreModule> {
    return {
      ngModule: DashboardStoreModule,
      providers: [DASHBOARD_FEATURE_CONFIG_PROVIDER],
    };
  }
}
