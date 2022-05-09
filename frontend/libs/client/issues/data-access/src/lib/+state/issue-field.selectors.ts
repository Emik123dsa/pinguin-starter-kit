import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ISSUE_FIELD_FEATURE_KEY,
  State,
  issueFieldAdapter,
} from './issue-field.reducer';

// Lookup the 'IssueField' feature state managed by NgRx
export const getIssueFieldState = createFeatureSelector<State>(
  ISSUE_FIELD_FEATURE_KEY,
);

const { selectAll, selectEntities } = issueFieldAdapter.getSelectors();

export const getIssueFieldLoaded = createSelector(
  getIssueFieldState,
  (state: State) => state.loaded,
);

export const getIssueFieldError = createSelector(
  getIssueFieldState,
  (state: State) => state.error,
);

export const getAllIssueField = createSelector(
  getIssueFieldState,
  (state: State) => selectAll(state),
);

export const getIssueFieldEntities = createSelector(
  getIssueFieldState,
  (state: State) => selectEntities(state),
);

export const getSelectedId = createSelector(
  getIssueFieldState,
  (state: State) => state.selectedId,
);

export const getSelected = createSelector(
  getIssueFieldEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined),
);
