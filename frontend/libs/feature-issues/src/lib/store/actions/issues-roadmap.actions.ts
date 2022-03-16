import { createAction, ActionCreator, union } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { IssuesRoadmapActionTypes } from '../constants';

const initIssuesRoadmap: ActionCreator<
  IssuesRoadmapActionTypes,
  () => TypedAction<IssuesRoadmapActionTypes>
> = createAction<IssuesRoadmapActionTypes>(
  IssuesRoadmapActionTypes.InitIssuesRoadmap,
);

const issuesRoadmapActions = union({
  initIssuesRoadmap,
});

/**
 * Resolve all issues fields actions into single static class.
 *
 * @export
 * @class IssuesRoadmapActions
 * @typedef {IssuesRoadmapActions}
 */
export class IssuesRoadmapActions {
  static get initIssuesRoadmap() {
    return initIssuesRoadmap;
  }
}

/**
 * Provide issues fields actions without entity.
 *
 * @export
 * @typedef {IssuesFieldsActions}
 */
export type IssuesRoadmapTypeActions = typeof issuesRoadmapActions;
