import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as IssueActions from './issue.actions';
import { IssueEntity } from './issue.models';

export const ISSUE_FEATURE_KEY = 'issues';

export interface State extends EntityState<IssueEntity> {
  selectedIssueId?: string | number; // which Issue record has been selected
  loaded: boolean; // has the Issue list been loaded
  error?: string | null; // last known error (if any)
}

export interface IssuePartialState {
  readonly [ISSUE_FEATURE_KEY]: State;
}

export const issueAdapter: EntityAdapter<IssueEntity> =
  createEntityAdapter<IssueEntity>();

export const initialState: State = issueAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const issueReducer = createReducer(
  initialState,
  on(IssueActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(IssueActions.loadIssueSuccess, (state, { issue }) =>
    issueAdapter.setAll(issue, { ...state, loaded: true }),
  ),
  on(IssueActions.loadIssueFailure, (state, { error }) => ({
    ...state,
    error,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return issueReducer(state, action);
}
