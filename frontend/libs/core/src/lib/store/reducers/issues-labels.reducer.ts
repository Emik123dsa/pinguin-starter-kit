import { IssuesLabelsEntity } from '@pinguin/api';
import { createReducer, ActionReducer, on } from '@ngrx/store';

import {
  initialIssuesLabelsEntityState,
  issuesLabelsEntityAdapter,
} from '../state';
import { IssuesLabelsEntityState, IssuesEntity } from '../models';
import { IssuesLabelsEntityActions } from '../actions';

export const issuesLabelsEntityReducer: ActionReducer<IssuesLabelsEntityState> =
  createReducer<IssuesLabelsEntityState>(
    initialIssuesLabelsEntityState,

    on(IssuesLabelsEntityActions.loadIssuesLabelsAll, (state) => {
      return issuesLabelsEntityAdapter.setAll(new Array<IssuesLabelsEntity>(), {
        ...state,
        loading: true,
      });
    }),

    on(
      IssuesLabelsEntityActions.loadIssuesLabelsAllSuccess,
      (state, { issuesLabels }: Pick<IssuesEntity, 'issuesLabels'>) => {
        return issuesLabelsEntityAdapter.addMany(
          issuesLabels as Array<IssuesLabelsEntity>,
          { ...state, loading: false, loaded: true, error: null },
        );
      },
    ),

    on(
      IssuesLabelsEntityActions.loadIssuesLabelsAllFailure,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (state, { error }: Pick<IssuesLabelsEntityState, 'error'>) => {
        return issuesLabelsEntityAdapter.removeAll({
          ...state,
          error,
          loaded: true,
          loading: false,
        });
      },
    ),
  );
