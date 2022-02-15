import { InjectionToken } from '@angular/core';
import { ActionReducerMap, StoreConfig } from '@ngrx/store';

import { COMMON_FEATURE_KEY } from './common.constants';

export const COMMON_FEATURE_CONFIG = new InjectionToken(
  'COMMON_FEATURE_CONFIG',
  {
    providedIn: 'root',
    // eslint-disable-next-line @typescript-eslint/ban-types
    factory: (): StoreConfig<{}> => {
      return {
        metaReducers: [],
        initialState: {},
      };
    },
  },
);

export const COMMON_FEATURE_REDUCER = new InjectionToken(COMMON_FEATURE_KEY, {
  providedIn: 'root',
  factory: (): ActionReducerMap<unknown> => {
    return {};
  },
});
