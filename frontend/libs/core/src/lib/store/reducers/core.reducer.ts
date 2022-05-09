import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { versionReducer } from './version.reducer';
import { issuesReducer } from './issues.reducer';

import { CoreState } from '../models';
import { CoreEntityActions } from '../actions';

import {
  ISSUES_FEATURE_KEY,
  ROUTER_FEATURE_KEY,
  VERSION_FEATURE_KEY,
} from '../constants';

export const coreEntityReducer: ActionReducerMap<CoreState, CoreEntityActions> =
  {
    [ROUTER_FEATURE_KEY]: routerReducer,
    [ISSUES_FEATURE_KEY]: issuesReducer,
    [VERSION_FEATURE_KEY]: versionReducer,
  };

export function coreEntityRootReducerFactory(): ActionReducerMap<
  CoreState,
  CoreEntityActions
> {
  return coreEntityReducer;
}
