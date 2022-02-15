import {
  IssuesFieldsEntityActions,
  IssuesFieldsActions,
} from './issues-fields.actions';
import {
  IssuesLabelsEntityActions,
  IssuesLabelsActions,
} from './issues-labels.actions';

/**
 * Resolve all issues actions into single static class.
 *
 * @export
 * @class IssuesFieldsActions
 * @typedef {IssuesFieldsActions}
 */
export type IssuesEntityActions = IssuesFieldsEntityActions &
  IssuesLabelsEntityActions;

export type IssuesActions = IssuesFieldsActions | IssuesLabelsActions;
