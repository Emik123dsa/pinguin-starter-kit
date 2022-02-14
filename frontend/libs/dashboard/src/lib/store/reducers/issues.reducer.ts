import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import type { IssuesEntityActions } from '../actions';
import type { IssuesEntityState } from '../models';
import { initialIssuesEntityState } from '../state';

const issuesReducer: ActionReducer<IssuesEntityState, Action> =
  createReducer<IssuesEntityState>(initialIssuesEntityState);

export function getIssuesReducer(
  state: IssuesEntityState = initialIssuesEntityState,
  action: IssuesEntityActions,
) {
  return issuesReducer(state, action);
}
