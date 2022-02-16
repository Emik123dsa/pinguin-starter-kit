import { createFeatureSelector } from '@ngrx/store';

import { IssuesEntityState } from '../models';

export const selectIssuesEntityState =
  createFeatureSelector<IssuesEntityState>('issues');
