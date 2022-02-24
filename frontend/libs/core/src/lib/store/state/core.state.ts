import { initialIssuesEntityState } from './issues.state';
import { RouterReducerState, CoreEntityState } from '../models';
import {
  ISSUES_FEATURE_KEY,
  ROUTER_FEATURE_KEY,
  VERSION_FEATURE_KEY,
} from '../constants';

import { VERSION } from '../../version';

export const initialCoreEntityState: CoreEntityState = {
  [ROUTER_FEATURE_KEY]: Object.create(null) as RouterReducerState,
  [ISSUES_FEATURE_KEY]: initialIssuesEntityState,
  [VERSION_FEATURE_KEY]: VERSION,
};
