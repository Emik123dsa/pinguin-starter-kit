import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISSUES_FEATURE_KEY, State, issuesAdapter } from './issues.reducer';

// Lookup the 'Issues' feature state managed by NgRx
export const getIssuesState = createFeatureSelector<State>(ISSUES_FEATURE_KEY);

const { selectAll, selectEntities } = issuesAdapter.getSelectors();

export const getIssuesLoaded = createSelector(
  getIssuesState,
  (state: State) => state.loaded,
);

export const getIssuesError = createSelector(
  getIssuesState,
  (state: State) => state.error,
);

export const getAllIssues = createSelector(getIssuesState, (state: State) =>
  selectAll(state),
);

export const getIssuesEntities = createSelector(
  getIssuesState,
  (state: State) => selectEntities(state),
);

export const getSelectedId = createSelector(
  getIssuesState,
  (state: State) => state.selectedId,
);

export const getSelected = createSelector(
  getIssuesEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined),
);
