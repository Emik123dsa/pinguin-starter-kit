import { ActionReducer, createReducer } from '@ngrx/store';

import { IssuesFieldsEntityState } from '../models';
import { initialIssuesFieldsEntityState } from '../state';

export const issuesFieldsEntityReducer: ActionReducer<IssuesFieldsEntityState> =
  createReducer<IssuesFieldsEntityState>(initialIssuesFieldsEntityState);
