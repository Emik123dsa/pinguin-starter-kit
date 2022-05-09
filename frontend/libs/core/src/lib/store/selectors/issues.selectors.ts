import { createFeatureSelector } from '@ngrx/store';
import { ISSUES_FEATURE_KEY } from '../constants';

import { IssuesState } from '../models';

export const getIssuesState =
  createFeatureSelector<IssuesState>(ISSUES_FEATURE_KEY);
