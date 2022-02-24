import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { versionReducer } from './version.reducer';
import { issuesEntityReducer } from './issues.reducer';

import { CoreEntityState } from '../models';
import { CoreEntityActions } from '../actions';

import {
  ISSUES_FEATURE_KEY,
  ROUTER_FEATURE_KEY,
  VERSION_FEATURE_KEY,
} from '../constants';

export const coreEntityReducer: ActionReducerMap<
  CoreEntityState,
  CoreEntityActions
> = {
  [ROUTER_FEATURE_KEY]: routerReducer,
  [ISSUES_FEATURE_KEY]: issuesEntityReducer,
  [VERSION_FEATURE_KEY]: versionReducer,
};

export function coreEntityRootReducerFactory(): ActionReducerMap<
  CoreEntityState,
  CoreEntityActions
> {
  return coreEntityReducer;
}
