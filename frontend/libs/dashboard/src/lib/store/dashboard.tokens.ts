import { InjectionToken } from '@angular/core';
import { ActionReducerMap, StoreConfig } from '@ngrx/store';

export const DASHBOARD_FEATURE_CONFIG = new InjectionToken<
  StoreConfig<unknown>
>('DASHBOARD_FEATURE_CONFIG');

export const DASHBOARD_FEATURE_REDUCER = new InjectionToken(
  'DASHBOARD_FEATURE_REDUCER',
  {
    providedIn: 'root',
    factory: (): ActionReducerMap<unknown> => {
      return {};
    },
  },
);
