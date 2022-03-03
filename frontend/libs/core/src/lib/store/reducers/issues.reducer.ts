import { ActionReducer, combineReducers } from '@ngrx/store';

import { IssuesEntityState } from '../models';
import { initialIssuesEntityState } from '../state';

import { IssuesFieldEntityReducer } from './issues-fields.reducer';
import { IssuesLabelEntityReducer } from './issues-labels.reducer';

export const issuesEntityReducer: ActionReducer<IssuesEntityState> =
  combineReducers<IssuesEntityState>(
    {
      labels: IssuesLabelEntityReducer,
      fields: IssuesFieldEntityReducer,
    },
    initialIssuesEntityState,
  );
