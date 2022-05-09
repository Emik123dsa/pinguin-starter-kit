import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as IssueFieldActions from './issue-field.actions';
import { IssueFieldEntity } from './issue-field.models';

export const ISSUE_FIELD_FEATURE_KEY = 'issueField';

export interface State extends EntityState<IssueFieldEntity> {
  selectedId?: string | number; // which IssueField record has been selected
  loaded: boolean; // has the IssueField list been loaded
  error?: string | null; // last known error (if any)
}

export interface IssueFieldPartialState {
  readonly [ISSUE_FIELD_FEATURE_KEY]: State;
}

export const issueFieldAdapter: EntityAdapter<IssueFieldEntity> =
  createEntityAdapter<IssueFieldEntity>();

export const initialState: State = issueFieldAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const issueFieldReducer = createReducer(
  initialState,
  on(IssueFieldActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(IssueFieldActions.loadIssueFieldSuccess, (state, { issueField }) =>
    issueFieldAdapter.setAll(issueField, { ...state, loaded: true }),
  ),
  on(IssueFieldActions.loadIssueFieldFailure, (state, { error }) => ({
    ...state,
    error,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return issueFieldReducer(state, action);
}
