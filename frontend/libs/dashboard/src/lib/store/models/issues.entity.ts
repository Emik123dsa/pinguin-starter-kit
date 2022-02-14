import { EntityState } from '@ngrx/entity';
import { IssuesLabelsEntityState } from './issues-labels.entity';

/**
 * Issues entity.
 *
 * @export
 * @interface IssuesEntity
 * @typedef {IssuesEntity}
 */
export interface IssuesEntity {
  issuesLabels: IssuesLabelsEntityState;
}

/**
 * Issues entity state.
 *
 * @export
 * @interface IssuesEntity
 * @typedef {IssuesEntity}
 */
export type IssuesEntityState = IssuesEntity;
