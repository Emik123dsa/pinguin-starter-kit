import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISSUE_FEATURE_KEY, State, issueAdapter } from './issue.reducer';

// Lookup the 'Issue' feature state managed by NgRx
export const getIssueState = createFeatureSelector<State>(ISSUE_FEATURE_KEY);

const { selectAll, selectEntities } = issueAdapter.getSelectors();

export const getIssueLoaded = createSelector(
  getIssueState,
  (state: State) => state.loaded,
);

export const getIssueError = createSelector(
  getIssueState,
  (state: State) => state.error,
);

export const getAllIssue = createSelector(getIssueState, (state: State) =>
  selectAll(state),
);

export const getIssueEntities = createSelector(getIssueState, (state: State) =>
  selectEntities(state),
);

export const getSelectedId = createSelector(
  getIssueState,
  (state: State) => state.selectedId,
);

export const getSelected = createSelector(
  getIssueEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined),
);
