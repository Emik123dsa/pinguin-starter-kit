import { createReducer, ActionReducer } from '@ngrx/store';
import { initialIssuesLabelsEntityState } from '../state';
import { IssuesLabelsEntityState } from '../models';

export const issuesLabelsEntityReducer: ActionReducer<IssuesLabelsEntityState> =
  createReducer<IssuesLabelsEntityState>(initialIssuesLabelsEntityState);
