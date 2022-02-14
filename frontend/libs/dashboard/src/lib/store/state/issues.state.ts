import { initialIssuesLabelsEntityState } from './issues-labels.state';

import { IssuesEntityState } from '../models';

/**
 * Initial issues state entity.
 *
 * @type {IssuesEntityState}
 */
export const initialIssuesEntityState: IssuesEntityState = {
  issuesLabels: initialIssuesLabelsEntityState,
};
