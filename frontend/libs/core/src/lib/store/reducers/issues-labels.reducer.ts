import { IssueLabelEntities, IssueLabelEntity } from '@pinguin/api';
import { createReducer, ActionReducer, on } from '@ngrx/store';

import { initialIssuesLabelsState, issuesLabelsAdapter } from '../state';
import { IssuesLabelsPartialState, IssuesLabelsState } from '../models';
import { IssuesLabelsActions } from '../actions';

export const issuesLabelsReducer: ActionReducer<IssuesLabelsState> =
  createReducer<IssuesLabelsState>(
    initialIssuesLabelsState,
    on(IssuesLabelsActions.loadIssuesLabels, (state) => {
      return issuesLabelsAdapter.setAll(new Array<IssueLabelEntity>(), {
        ...state,
        loading: true,
      });
    }),

    on(
      IssuesLabelsActions.loadIssuesLabelsSuccess,
      (state, { labels }: IssuesLabelsPartialState) => {
        return issuesLabelsAdapter.addMany(labels, {
          ...state,
          loading: false,
          loaded: true,
          error: null,
        });
      },
    ),

    on(
      IssuesLabelsActions.loadIssuesLabelsFailure,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (state, { error }: Pick<IssuesLabelsState, 'error'>) => {
        return issuesLabelsAdapter.removeAll({
          ...state,
          error,
          loaded: true,
          loading: false,
        });
      },
    ),
  );
