import { ActionReducer, combineReducers } from '@ngrx/store';

import { IssuesState } from '../models';
import { initialIssuesState } from '../state';

import { issuesFieldsReducer } from './issues-fields.reducer';
import { issuesLabelsReducer } from './issues-labels.reducer';

export const issuesReducer: ActionReducer<IssuesState> =
  combineReducers<IssuesState>(
    {
      labels: issuesLabelsReducer,
      fields: issuesFieldsReducer,
    },
    initialIssuesState,
  );
