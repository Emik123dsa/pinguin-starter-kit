import { TypedAction } from '@ngrx/store/src/models';
import { createAction, props, ActionCreator, union } from '@ngrx/store';

import { IssuesEntity } from '../models';
import { IssuesLabelsActionTypes } from '../constants';

const loadAllIssuesLabels: ActionCreator<
  IssuesLabelsActionTypes,
  () => TypedAction<IssuesLabelsActionTypes>
> = createAction<IssuesLabelsActionTypes>(
  IssuesLabelsActionTypes.LoadAllIssuesLabels,
);

const loadAllIssuesLabelsSuccess: ActionCreator<
  IssuesLabelsActionTypes.LoadAllIssuesLabelsSuccess,
  (
    props: Pick<IssuesEntity, 'labels'>,
  ) => Pick<IssuesEntity, 'labels'> & TypedAction<IssuesLabelsActionTypes>
> = createAction(
  IssuesLabelsActionTypes.LoadAllIssuesLabelsSuccess,
  props<Pick<IssuesEntity, 'labels'>>(),
);

const loadAllIssuesLabelsFailure: ActionCreator<
  IssuesLabelsActionTypes.LoadAllIssuesLabelsFailure,
  (props: { error: unknown }) => {
    error: unknown;
  } & TypedAction<IssuesLabelsActionTypes.LoadAllIssuesLabelsFailure>
> = createAction(
  IssuesLabelsActionTypes.LoadAllIssuesLabelsFailure,
  props<{ error: unknown }>(),
);

const issuesLabelsActions = union({
  loadAllIssuesLabels,
  loadAllIssuesLabelsSuccess,
  loadAllIssuesLabelsFailure,
});

/**
 * Resolve all issues labels actions into single static class.
 *
 * @export
 * @class IssuesFieldsActions
 * @typedef {IssuesFieldsActions}
 */
export class IssuesLabelsActions {
  static get loadAllIssuesLabels() {
    return loadAllIssuesLabels;
  }

  static get loadAllIssuesLabelsSuccess() {
    return loadAllIssuesLabelsSuccess;
  }
  static get loadAllIssuesLabelsFailure() {
    return loadAllIssuesLabelsFailure;
  }
}

/**
 * Provide issues labels actions without entity.
 *
 * @export
 * @typedef {IssuesFieldsActions}
 */
export type IssuesLabelsTypeActions = typeof issuesLabelsActions;
