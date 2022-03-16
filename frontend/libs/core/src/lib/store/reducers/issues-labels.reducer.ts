import { IssueLabelEntity } from '@pinguin/api';
import { createReducer, ActionReducer, on } from '@ngrx/store';

import {
  initialIssuesLabelsEntityState,
  issuesLabelsEntityAdapter,
} from '../state';
import { IssuesLabelsEntityState, IssuesEntity } from '../models';
import { IssuesLabelsActions } from '../actions';

export const IssueLabelEntityReducer: ActionReducer<IssuesLabelsEntityState> =
  createReducer<IssuesLabelsEntityState>(
    initialIssuesLabelsEntityState,
    on(IssuesLabelsActions.loadAllIssuesLabels, (state) => {
      return issuesLabelsEntityAdapter.setAll(new Array<IssueLabelEntity>(), {
        ...state,
        loading: true,
      });
    }),

    on(
      IssuesLabelsActions.loadAllIssuesLabelsSuccess,
      (state, { labels }: Pick<IssuesEntity, 'labels'>) => {
        return issuesLabelsEntityAdapter.addMany(labels, {
          ...state,
          loading: false,
          loaded: true,
          error: null,
        });
      },
    ),

    on(
      IssuesLabelsActions.loadAllIssuesLabelsFailure,
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
