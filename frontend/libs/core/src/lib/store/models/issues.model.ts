import { IssuesLabelEntity, IssuesFieldEntity } from '@pinguin/api';
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
  labels: Array<IssuesLabelEntity>;
  fields: Array<IssuesFieldEntity>;
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
