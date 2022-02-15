import { createFeatureSelector } from '@ngrx/store';

import { IssuesEntityState } from '../models';

export const selectIssuesLabelsEntityState =
  createFeatureSelector<IssuesEntityState>('issues');
