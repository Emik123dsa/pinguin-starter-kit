import { TypedAction } from '@ngrx/store/src/models';
import { createAction, props, ActionCreator, union } from '@ngrx/store';

import { IssuesEntity } from '../models';
import { IssuesLabelsActionTypes } from '../constants';

const loadIssuesLabelsAll: ActionCreator<
  IssuesLabelsActionTypes,
  () => TypedAction<IssuesLabelsActionTypes>
> = createAction<IssuesLabelsActionTypes>(
  IssuesLabelsActionTypes.LoadIssuesLabelsAll,
);

const loadIssuesLabelsAllSuccess: ActionCreator<
  IssuesLabelsActionTypes.LoadIssuesLabelsAllSuccess,
  (
    props: Pick<IssuesEntity, 'issuesLabels'>,
  ) => Pick<IssuesEntity, 'issuesLabels'> & TypedAction<IssuesLabelsActionTypes>
> = createAction(
  IssuesLabelsActionTypes.LoadIssuesLabelsAllSuccess,
  props<Pick<IssuesEntity, 'issuesLabels'>>(),
);

const loadIssuesLabelsAllFailure: ActionCreator<
  IssuesLabelsActionTypes.LoadIssuesLabelsAllFailure,
  (props: { error: unknown }) => {
    error: unknown;
  } & TypedAction<IssuesLabelsActionTypes.LoadIssuesLabelsAllFailure>
> = createAction(
  IssuesLabelsActionTypes.LoadIssuesLabelsAllFailure,
  props<{ error: unknown }>(),
);

const issuesLabelsActions = union({
  loadIssuesLabelsAll,
  loadIssuesLabelsAllSuccess,
  loadIssuesLabelsAllFailure,
});

/**
 * Resolve all issues labels actions into single static class.
 *
 * @export
 * @class IssuesFieldsActions
 * @typedef {IssuesFieldsActions}
 */
export class IssuesLabelsEntityActions {
  static get loadIssuesLabelsAll() {
    return loadIssuesLabelsAll;
  }

  static get loadIssuesLabelsAllSuccess() {
    return loadIssuesLabelsAllSuccess;
  }
  static get loadIssuesLabelsAllFailure() {
    return loadIssuesLabelsAllFailure;
  }
}

/**
 * Provide issues labels actions without entity.
 *
 * @export
 * @typedef {IssuesFieldsActions}
 */
export type IssuesLabelsActions = typeof issuesLabelsActions;
