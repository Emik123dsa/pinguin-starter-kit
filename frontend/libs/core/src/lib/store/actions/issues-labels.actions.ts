import { TypedAction } from '@ngrx/store/src/models';
import { createAction, props, ActionCreator, union } from '@ngrx/store';

import { IssuesLabelsPartialState } from '../models';
import { IssuesLabelsActionTypes } from '../constants';

const loadIssuesLabels: ActionCreator<
  IssuesLabelsActionTypes,
  () => TypedAction<IssuesLabelsActionTypes>
> = createAction<IssuesLabelsActionTypes>(
  IssuesLabelsActionTypes.LoadIssuesLabels,
);

const loadIssuesLabelsSuccess: ActionCreator<
  IssuesLabelsActionTypes.LoadIssuesLabelsSuccess,
  (
    props: IssuesLabelsPartialState,
  ) => IssuesLabelsPartialState & TypedAction<IssuesLabelsActionTypes>
> = createAction(
  IssuesLabelsActionTypes.LoadIssuesLabelsSuccess,
  props<IssuesLabelsPartialState>(),
);

const loadIssuesLabelsFailure: ActionCreator<
  IssuesLabelsActionTypes.LoadIssuesLabelsFailure,
  (props: { error: unknown }) => {
    error: unknown;
  } & TypedAction<IssuesLabelsActionTypes.LoadIssuesLabelsFailure>
> = createAction(
  IssuesLabelsActionTypes.LoadIssuesLabelsFailure,
  props<{ error: unknown }>(),
);

const issuesLabelsActions = union({
  loadIssuesLabels,
  loadIssuesLabelsSuccess,
  loadIssuesLabelsFailure,
});

/**
 * Resolve all issues labels actions into single static class.
 *
 * @export
 * @class IssuesFieldsActions
 * @typedef {IssuesFieldsActions}
 */
export class IssuesLabelsActions {
  static get loadIssuesLabels() {
    return loadIssuesLabels;
  }

  static get loadIssuesLabelsSuccess() {
    return loadIssuesLabelsSuccess;
  }

  static get loadIssuesLabelsFailure() {
    return loadIssuesLabelsFailure;
  }
}

/**
 * Provide issues labels actions without entity.
 *
 * @export
 * @typedef {IssuesFieldsActions}
 */
export type IssuesLabelsTypeActions = typeof issuesLabelsActions;
