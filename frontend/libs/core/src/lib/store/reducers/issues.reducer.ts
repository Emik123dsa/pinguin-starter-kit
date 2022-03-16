import { ActionReducer, combineReducers } from '@ngrx/store';

import { IssuesEntityState } from '../models';
import { initialIssuesEntityState } from '../state';

import { IssueFieldEntityReducer } from './issues-fields.reducer';
import { IssueLabelEntityReducer } from './issues-labels.reducer';

export const issuesEntityReducer: ActionReducer<IssuesEntityState> =
  combineReducers<IssuesEntityState>(
    {
      labels: IssueLabelEntityReducer,
      fields: IssueFieldEntityReducer,
    },
    initialIssuesEntityState,
  );
