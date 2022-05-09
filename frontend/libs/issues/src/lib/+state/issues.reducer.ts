import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as IssuesActions from './issues.actions';
import { IssuesEntity } from './issues.models';

export const ISSUES_FEATURE_KEY = 'issues';

export interface State extends EntityState<IssuesEntity> {
  selectedId?: string | number; // which Issues record has been selected
  loaded: boolean; // has the Issues list been loaded
  error?: string | null; // last known error (if any)
}

export interface IssuesPartialState {
  readonly [ISSUES_FEATURE_KEY]: State;
}

export const issuesAdapter: EntityAdapter<IssuesEntity> =
  createEntityAdapter<IssuesEntity>();

export const initialState: State = issuesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const issuesReducer = createReducer(
  initialState,
  on(IssuesActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(IssuesActions.loadIssuesSuccess, (state, { issues }) =>
    issuesAdapter.setAll(issues, { ...state, loaded: true }),
  ),
  on(IssuesActions.loadIssuesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return issuesReducer(state, action);
}
