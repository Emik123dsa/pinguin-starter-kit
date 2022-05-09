import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as IssueLabelActions from './issue-label.actions';
import { IssueLabelEntity } from './issue-label.models';

export const ISSUE_LABEL_FEATURE_KEY = 'issueLabel';

export interface State extends EntityState<IssueLabelEntity> {
  selectedId?: string | number; // which IssueLabel record has been selected
  loaded: boolean; // has the IssueLabel list been loaded
  error?: string | null; // last known error (if any)
}

export interface IssueLabelPartialState {
  readonly [ISSUE_LABEL_FEATURE_KEY]: State;
}

export const issueLabelAdapter: EntityAdapter<IssueLabelEntity> =
  createEntityAdapter<IssueLabelEntity>();

export const initialState: State = issueLabelAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const issueLabelReducer = createReducer(
  initialState,
  on(IssueLabelActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(IssueLabelActions.loadIssueLabelSuccess, (state, { issueLabel }) =>
    issueLabelAdapter.setAll(issueLabel, { ...state, loaded: true }),
  ),
  on(IssueLabelActions.loadIssueLabelFailure, (state, { error }) => ({
    ...state,
    error,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return issueLabelReducer(state, action);
}
