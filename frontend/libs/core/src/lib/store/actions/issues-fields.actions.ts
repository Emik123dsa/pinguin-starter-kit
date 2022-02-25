import { createAction, props, ActionCreator, union } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import { IssuesEntity } from '../models';

import { IssuesFieldsActionTypes } from '../constants';

const loadAllIssuesFields: ActionCreator<
  IssuesFieldsActionTypes,
  () => TypedAction<IssuesFieldsActionTypes>
> = createAction<IssuesFieldsActionTypes>(
  IssuesFieldsActionTypes.LoadAllIssuesFields,
);

const loadAllIssuesFieldsSuccess: ActionCreator<
  IssuesFieldsActionTypes.LoadAllIssuesFieldsSuccess,
  (
    props: Pick<IssuesEntity, 'fields'>,
  ) => Pick<IssuesEntity, 'fields'> & TypedAction<IssuesFieldsActionTypes>
> = createAction(
  IssuesFieldsActionTypes.LoadAllIssuesFieldsSuccess,
  props<Pick<IssuesEntity, 'fields'>>(),
);

const loadAllIssuesFieldsFailure: ActionCreator<
  IssuesFieldsActionTypes.LoadAllIssuesFieldsFailure,
  (
    props: IssuesEntity,
  ) => IssuesEntity &
    TypedAction<IssuesFieldsActionTypes.LoadAllIssuesFieldsFailure>
> = createAction(
  IssuesFieldsActionTypes.LoadAllIssuesFieldsFailure,
  props<OmitThisParameter<IssuesEntity>>(),
);

const issuesFieldsActions = union({
  loadAllIssuesFields,
  loadAllIssuesFieldsSuccess,
  loadAllIssuesFieldsFailure,
});

/**
 * Resolve all issues fields actions into single static class.
 *
 * @export
 * @class IssuesFieldsActions
 * @typedef {IssuesFieldsActions}
 */
export class IssuesFieldsEntityActions {
  static get loadAllIssuesFields() {
    return loadAllIssuesFields;
  }

  static get loadAllIssuesFieldsSuccess() {
    return loadAllIssuesFieldsSuccess;
  }

  static get loadAllIssuesFieldsFailure() {
    return loadAllIssuesFieldsFailure;
  }
}

/**
 * Provide issues fields actions without entity.
 *
 * @export
 * @typedef {IssuesFieldsActions}
 */
export type IssuesFieldsActions = typeof issuesFieldsActions;
