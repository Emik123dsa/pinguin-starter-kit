import { createAction, ActionCreator, union } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { RoadmapPageActionTypes } from '../constants';

const initIssuesRoadmap: ActionCreator<
  RoadmapPageActionTypes,
  () => TypedAction<RoadmapPageActionTypes>
> = createAction<RoadmapPageActionTypes>(
  RoadmapPageActionTypes.InitIssuesRoadmap,
);

const roadmapPageActions = union({
  initIssuesRoadmap,
});

/**
 * Resolve all issues fields actions into single static class.
 *
 * @export
 * @class RoadmapPageActions
 * @typedef {RoadmapPageActions}
 */
export class RoadmapPageActions {
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
export type RoadmapPageTypeActions = typeof roadmapPageActions;
