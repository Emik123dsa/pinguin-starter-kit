import { createAction, props, ActionCreator, union } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import { IssuesEntity } from '../models';

import { IssuesFieldsActionTypes } from '../constants';

const loadIssuesFieldsAll: ActionCreator<
  IssuesFieldsActionTypes,
  () => TypedAction<IssuesFieldsActionTypes>
> = createAction<IssuesFieldsActionTypes>(
  IssuesFieldsActionTypes.LoadIssuesFieldsAll,
);

const loadIssuesFieldsAllSuccess: ActionCreator<
  IssuesFieldsActionTypes.LoadIssuesFieldsAllSuccess,
  (
    props: Pick<IssuesEntity, 'issuesFields'>,
  ) => Pick<IssuesEntity, 'issuesFields'> & TypedAction<IssuesFieldsActionTypes>
> = createAction(
  IssuesFieldsActionTypes.LoadIssuesFieldsAllSuccess,
  props<Pick<IssuesEntity, 'issuesFields'>>(),
);

const loadIssuesFieldsAllFailure: ActionCreator<
  IssuesFieldsActionTypes.LoadIssuesFieldsAllFailure,
  (
    props: IssuesEntity,
  ) => IssuesEntity &
    TypedAction<IssuesFieldsActionTypes.LoadIssuesFieldsAllFailure>
> = createAction(
  IssuesFieldsActionTypes.LoadIssuesFieldsAllFailure,
  props<OmitThisParameter<IssuesEntity>>(),
);

const issuesFieldsActions = union({
  loadIssuesFieldsAll,
  loadIssuesFieldsAllSuccess,
  loadIssuesFieldsAllFailure,
});

/**
 * Resolve all issues fields actions into single static class.
 *
 * @export
 * @class IssuesFieldsActions
 * @typedef {IssuesFieldsActions}
 */
export class IssuesFieldsEntityActions {
  static get loadIssuesFieldsAll() {
    return loadIssuesFieldsAll;
  }

  static get loadIssuesFieldsAllSuccess() {
    return loadIssuesFieldsAllSuccess;
  }

  static get loadIssuesFieldsAllFailure() {
    return loadIssuesFieldsAllFailure;
  }
}

/**
 * Provide issues fields actions without entity.
 *
 * @export
 * @typedef {IssuesFieldsActions}
 */
export type IssuesFieldsActions = typeof issuesFieldsActions;
