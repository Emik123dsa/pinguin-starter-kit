import { routerReducer } from '@ngrx/router-store';

import { IssuesEntityState } from './issues.model';
import {
  ROUTER_FEATURE_KEY,
  ISSUES_FEATURE_KEY,
  VERSION_FEATURE_KEY,
} from '../constants';
import { Version } from '@angular/core';

// @internal `RouterReducerState`.
export type RouterReducerState = typeof routerReducer;

export interface CoreEntityState {
  readonly [ROUTER_FEATURE_KEY]?: RouterReducerState;
  readonly [ISSUES_FEATURE_KEY]: IssuesEntityState;
  readonly [VERSION_FEATURE_KEY]: Version;
}
