import { IssueLabelEntity, IssueFieldEntity } from '@pinguin/api';
import { IssuesFieldsEntityState } from './issues-fields.model';
import { IssuesLabelsEntityState } from './issues-labels.model';

/**
 * Issues entity.
 *
 * @export
 * @interface IssuesEntity
 * @typedef {IssuesEntity}
 */
export interface IssuesEntity {
  labels: Array<IssueLabelEntity>;
  fields: Array<IssueFieldEntity>;
}

/**
 * Issues entity state.
 *
 * @export
 * @interface IssuesEntity
 * @typedef {IssuesEntity}
 */
export interface IssuesEntityState {
  labels: IssuesLabelsEntityState;
  fields: IssuesFieldsEntityState;
}
