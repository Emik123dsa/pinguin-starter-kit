import { ActionReducer, combineReducers } from '@ngrx/store';

import { IssuesEntityState } from '../models';
import { initialIssuesEntityState } from '../state';

import { issuesFieldsEntityReducer } from './issues-fields.reducer';
import { issuesLabelsEntityReducer } from './issues-labels.reducer';

export const issuesEntityReducer: ActionReducer<IssuesEntityState> =
  combineReducers<IssuesEntityState>(
    {
      labels: issuesLabelsEntityReducer,
      fields: issuesFieldsEntityReducer,
    },
    initialIssuesEntityState,
  );
