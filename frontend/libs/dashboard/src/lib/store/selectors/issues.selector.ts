import { createFeatureSelector } from '@ngrx/store';

import type { IssuesEntityState } from '../models';

export const selectIssuesLabelsEntityState =
  createFeatureSelector<IssuesEntityState>('issues');
