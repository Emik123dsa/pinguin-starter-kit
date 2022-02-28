import {
  IssuesFieldsActions,
  IssuesFieldsTypeActions,
} from './issues-fields.actions';
import {
  IssuesLabelsActions,
  IssuesLabelsTypeActions,
} from './issues-labels.actions';

/**
 * Resolve all issues actions into single static class.
 *
 * @export
 * @class IssuesFieldsActions
 * @typedef {IssuesFieldsActions}
 */
export type IssuesActions = IssuesFieldsActions & IssuesLabelsActions;

export type IssuesTypeActions =
  | IssuesFieldsTypeActions
  | IssuesLabelsTypeActions;
