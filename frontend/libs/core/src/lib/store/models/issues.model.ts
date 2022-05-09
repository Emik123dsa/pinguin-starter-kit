import { IssuesFieldsState } from './issues-fields.model';
import { IssuesLabelsState } from './issues-labels.model';

/**
 * Issues entity state.
 *
 * @export
 * @interface IssuesEntity
 * @typedef {IssuesEntity}
 */
export interface IssuesState {
  labels: IssuesLabelsState;
  fields: IssuesFieldsState;
}
