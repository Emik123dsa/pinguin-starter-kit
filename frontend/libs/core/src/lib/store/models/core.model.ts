import { ActionReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { IssuesEntityState } from '.';
import { ROUTER_FEATURE_KEY, ISSUES_FEATURE_KEY } from '../constants';

// @internal `RouterReducerState`.
export type RouterReducerState = typeof routerReducer;

export interface CoreEntityState {
  readonly [ROUTER_FEATURE_KEY]?: RouterReducerState;
  readonly [ISSUES_FEATURE_KEY]: IssuesEntityState;
}
