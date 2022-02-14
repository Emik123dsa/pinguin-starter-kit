import { createFeatureSelector } from '@ngrx/store';

import type { IssuesEntityState } from '../models';

export const issuesLabelsEntityState =
  createFeatureSelector<IssuesEntityState>('issues');
