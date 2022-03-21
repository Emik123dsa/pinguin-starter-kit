import { ActionReducer, createReducer, on } from '@ngrx/store';
import { IssueFieldEntity } from '@pinguin/api';

import { IssuesFieldsActions } from '../actions';
import { IssuesEntity, IssuesFieldsEntityState } from '../models';
import {
  initialIssuesFieldsEntityState,
  issuesFieldsEntityAdapter,
} from '../state';

export const IssueFieldEntityReducer: ActionReducer<IssuesFieldsEntityState> =
  createReducer<IssuesFieldsEntityState>(
    initialIssuesFieldsEntityState,
    on(
      IssuesFieldsActions.loadAllIssuesFields,
      (state: IssuesFieldsEntityState) => {
        return issuesFieldsEntityAdapter.setAll(new Array<IssueFieldEntity>(), {
          ...state,
          loading: true,
        });
      },
    ),
    on(
      IssuesFieldsActions.loadAllIssuesFieldsSuccess,
      (
        state: IssuesFieldsEntityState,
        { fields }: Pick<IssuesEntity, 'fields'>,
      ) => {
        return issuesFieldsEntityAdapter.addMany(fields, {
          ...state,
          loading: false,
          loaded: true,
          error: null,
        });
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
