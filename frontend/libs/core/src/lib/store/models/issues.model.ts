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
  issuesLabels: IssuesLabelsEntity | Array<IssuesLabelsEntity>;
  issuesFields: IssuesFieldsEntity | Array<IssuesFieldsEntity>;
}

/**
 * Issues entity state.
 *
 * @export
 * @interface IssuesEntity
 * @typedef {IssuesEntity}
 */
export interface IssuesEntityState {
  issuesLabels: IssuesLabelsEntityState;
  issuesFields: IssuesFieldsEntityState;
}
