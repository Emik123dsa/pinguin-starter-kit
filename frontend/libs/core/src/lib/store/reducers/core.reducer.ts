import { ActionReducerMap, RootStoreConfig } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { CoreEntityState } from '../models';
import { CoreEntityActions } from '../actions';
import { issuesEntityReducer } from './issues.reducer';

import { ISSUES_FEATURE_KEY, ROUTER_FEATURE_KEY } from '../constants';

export const coreEntityReducer: ActionReducerMap<
  CoreEntityState,
  CoreEntityActions
> = {
  [ROUTER_FEATURE_KEY]: routerReducer,
  [ISSUES_FEATURE_KEY]: issuesEntityReducer,
};

export function coreEntityRootReducerFactory(): ActionReducerMap<
  CoreEntityState,
  CoreEntityActions
> {
  return coreEntityReducer;
}
