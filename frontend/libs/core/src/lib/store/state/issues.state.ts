import { IssuesState } from '../models';

import { initialIssuesLabelsState } from './issues-labels.state';
import { initialIssuesFieldsState } from './issues-fields.state';

/**
 * Initial issues state entity.
 *
 * @type {IssuesState}
 */
export const initialIssuesState: IssuesState = {
  labels: initialIssuesLabelsState,
  fields: initialIssuesFieldsState,
};
