import { FactoryProvider } from '@angular/core';
import { StoreConfig } from '@ngrx/store';

import {
  ClientEnvironmentOptions,
  CLIENT_ENVIRONMENT_OPTIONS,
} from '@pinguin/environment';

import { DASHBOARD_FEATURE_CONFIG } from './dashboard.tokens';

/**
 * Dashboard feature reducer provider factory.
 *
 * @returns {ActionReducerMap<unknown>}
 */
function dashboardFeatureConfigProviderFactory(
  options: ClientEnvironmentOptions,
): StoreConfig<unknown> {
  // TODO: implement internal dashboard features.
  return {
    metaReducers: [],
    initialState: {},
  };
}

export const DASHBOARD_FEATURE_CONFIG_PROVIDER: FactoryProvider = {
  provide: DASHBOARD_FEATURE_CONFIG,
  useFactory: dashboardFeatureConfigProviderFactory,
  deps: [CLIENT_ENVIRONMENT_OPTIONS],
  multi: false,
};
