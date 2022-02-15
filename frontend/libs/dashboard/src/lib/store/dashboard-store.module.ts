import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DASHBOARD_FEATURE_KEY } from './dashboard.constants';
import {
  DASHBOARD_FEATURE_CONFIG,
  DASHBOARD_FEATURE_REDUCER,
} from './dashboard.tokens';
import { DASHBOARD_FEATURE_CONFIG_PROVIDER } from './dashboard.providers';

@NgModule({
  imports: [
    StoreModule.forFeature(
      DASHBOARD_FEATURE_KEY,
      DASHBOARD_FEATURE_REDUCER,
      DASHBOARD_FEATURE_CONFIG,
    ),
    EffectsModule.forFeature([]),
  ],
  providers: [],
})
export class DashboardStoreModule {
  public constructor() {}

  public static forRoot(): ModuleWithProviders<DashboardStoreModule> {
    return {
      ngModule: DashboardStoreModule,
      providers: [DASHBOARD_FEATURE_CONFIG_PROVIDER],
    };
  }
}
