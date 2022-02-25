import { IssuesLabelsEntity, IssuesFieldsEntity } from '@pinguin/api';
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
  labels: IssuesLabelsEntity | Array<IssuesLabelsEntity>;
  fields: IssuesFieldsEntity | Array<IssuesFieldsEntity>;
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
