import { IssuesEntityState } from '../models';

import { initialIssuesLabelsEntityState } from './issues-labels.state';
import { initialIssuesFieldsEntityState } from './issues-fields.state';

/**
 * Initial issues state entity.
 *
 * @type {IssuesEntityState}
 */
export const initialIssuesEntityState: IssuesEntityState = {
  issuesLabels: initialIssuesLabelsEntityState,
  issuesFields: initialIssuesFieldsEntityState,
};
