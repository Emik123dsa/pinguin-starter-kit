import { createAction, props, ActionCreator, union } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import { IssuesFieldsPartialState } from '../models';
import { IssuesFieldsActionTypes } from '../constants';

const loadIssuesFields: ActionCreator<
  IssuesFieldsActionTypes,
  () => TypedAction<IssuesFieldsActionTypes>
> = createAction<IssuesFieldsActionTypes>(
  IssuesFieldsActionTypes.LoadIssuesFields,
);

const loadIssuesFieldsSuccess: ActionCreator<
  IssuesFieldsActionTypes.LoadIssuesFieldsSuccess,
  (
    props: IssuesFieldsPartialState,
  ) => IssuesFieldsPartialState & TypedAction<IssuesFieldsActionTypes>
> = createAction(
  IssuesFieldsActionTypes.LoadIssuesFieldsSuccess,
  props<IssuesFieldsPartialState>(),
);

const loadIssuesFieldsFailure: ActionCreator<
  IssuesFieldsActionTypes.LoadIssuesFieldsFailure,
  (props: { error: unknown }) => {
    error: unknown;
  } & TypedAction<IssuesFieldsActionTypes.LoadIssuesFieldsFailure>
> = createAction(
  IssuesFieldsActionTypes.LoadIssuesFieldsFailure,
  props<{ error: unknown }>(),
);

const issuesFieldsActions = union({
  loadIssuesFields,
  loadIssuesFieldsSuccess,
  loadIssuesFieldsFailure,
});

/**
 * Resolve all issues fields actions into single static class.
 *
 * @export
 * @class IssuesFieldsActions
 * @typedef {IssuesFieldsActions}
 */
export class IssuesFieldsActions {
  static get loadIssuesFields() {
    return loadIssuesFields;
  }

  static get loadIssuesFieldsSuccess() {
    return loadIssuesFieldsSuccess;
  }

  static get loadIssuesFieldsFailure() {
    return loadIssuesFieldsFailure;
  }
}

/**
 * Provide issues fields actions without entity.
 *
 * @export
 * @typedef {IssuesFieldsActions}
 */
export type IssuesFieldsTypeActions = typeof issuesFieldsActions;
