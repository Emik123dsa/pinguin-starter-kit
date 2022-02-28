import { ActionReducer, createReducer, on } from '@ngrx/store';
import { IssuesFieldsEntity } from '@pinguin/api';

import { IssuesFieldsActions } from '../actions';
import { IssuesEntity, IssuesFieldsEntityState } from '../models';
import {
  initialIssuesFieldsEntityState,
  issuesFieldsEntityAdapter,
} from '../state';

export const issuesFieldsEntityReducer: ActionReducer<IssuesFieldsEntityState> =
  createReducer<IssuesFieldsEntityState>(
    initialIssuesFieldsEntityState,

    on(
      IssuesFieldsActions.loadAllIssuesFields,
      (state: IssuesFieldsEntityState) => {
        return issuesFieldsEntityAdapter.setAll(
          new Array<IssuesFieldsEntity>(),
          {
            ...state,
            loading: true,
          },
        );
      },
    ),

    on(
      IssuesFieldsActions.loadAllIssuesFieldsSuccess,
      (
        state: IssuesFieldsEntityState,
        { fields }: Pick<IssuesEntity, 'fields'>,
      ) => {
        return issuesFieldsEntityAdapter.addMany(
          fields as Array<IssuesFieldsEntity>,
          { ...state, loading: false, loaded: true, error: null },
        );
      },
    ),

    on(
      IssuesFieldsActions.loadAllIssuesFieldsFailure,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (
        state: IssuesFieldsEntityState,
        { error }: Pick<IssuesFieldsEntityState, 'error'>,
      ) => {
        return issuesFieldsEntityAdapter.removeAll({
          ...state,
          error,
          loaded: true,
          loading: false,
        });
      },
    ),
  );
