import { ActionReducer, createReducer, on } from '@ngrx/store';
import { IssueFieldEntity } from '@pinguin/api';

import { IssuesFieldsActions } from '../actions';
import { IssuesFieldsState } from '../models';
import { initialIssuesFieldsState, issuesFieldsAdapter } from '../state';

export const issuesFieldsReducer: ActionReducer<IssuesFieldsState> =
  createReducer<IssuesFieldsState>(
    initialIssuesFieldsState,
    on(IssuesFieldsActions.loadIssuesFields, (state: IssuesFieldsState) => {
      return {
        ...state,
        loading: true,
      };
    }),
    on(
      IssuesFieldsActions.loadIssuesFieldsSuccess,
      (state: IssuesFieldsState, { fields }: IssueFieldEntity[]) => {
        return issuesFieldsAdapter.setAll(fields, {
          ...state,
          loading: false,
          loaded: true,
          error: null,
        });
      },
    ),
    on(
      IssuesFieldsActions.loadIssuesFieldsFailure,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (
        state: IssuesFieldsState,
        { error }: Pick<IssuesFieldsState, 'error'>,
      ) => {
        return issuesFieldsAdapter.removeAll({
          ...state,
          error,
          loaded: true,
          loading: false,
        });
      },
    ),
  );
