import { Version } from '@angular/core';
import { routerReducer } from '@ngrx/router-store';

import { IssuesState } from './issues.model';
import {
  ROUTER_FEATURE_KEY,
  ISSUES_FEATURE_KEY,
  VERSION_FEATURE_KEY,
} from '../constants';

// @internal `RouterReducerState`.
export type RouterReducerState = typeof routerReducer;

export interface CoreState {
  readonly [ROUTER_FEATURE_KEY]?: RouterReducerState;
  readonly [ISSUES_FEATURE_KEY]: IssuesState;
  readonly [VERSION_FEATURE_KEY]?: Version;
}
