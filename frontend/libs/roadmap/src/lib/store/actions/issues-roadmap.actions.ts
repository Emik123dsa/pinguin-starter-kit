import { createAction, ActionCreator, union } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { IssuesRoadmapContainerActionTypes } from '../constants';

const initIssuesRoadmap: ActionCreator<
  IssuesRoadmapContainerActionTypes,
  () => TypedAction<IssuesRoadmapContainerActionTypes>
> = createAction<IssuesRoadmapContainerActionTypes>(
  IssuesRoadmapContainerActionTypes.InitIssuesRoadmap,
);

const issuesRoadmapContainerActions = union({
  initIssuesRoadmap,
});

/**
 * Resolve all issues fields actions into single static class.
 *
 * @export
 * @class IssuesRoadmapActions
 * @typedef {IssuesRoadmapActions}
 */
export class IssuesRoadmapContainerActions {
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
export type IssuesRoadmapContainerTypeActions =
  typeof issuesRoadmapContainerActions;
