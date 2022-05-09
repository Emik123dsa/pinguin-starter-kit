import { initialIssuesState } from './issues.state';
import { RouterReducerState, CoreState } from '../models';
import {
  ISSUES_FEATURE_KEY,
  ROUTER_FEATURE_KEY,
  VERSION_FEATURE_KEY,
} from '../constants';

import { VERSION } from '../../version';

export const initialCoreState: CoreState = {
  [ROUTER_FEATURE_KEY]: {} as RouterReducerState,
  [ISSUES_FEATURE_KEY]: initialIssuesState,
  [VERSION_FEATURE_KEY]: VERSION,
};
