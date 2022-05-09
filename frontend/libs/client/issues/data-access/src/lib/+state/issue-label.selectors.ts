import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ISSUE_LABEL_FEATURE_KEY,
  State,
  issueLabelAdapter,
} from './issue-label.reducer';

// Lookup the 'IssueLabel' feature state managed by NgRx
export const getIssueLabelState = createFeatureSelector<State>(
  ISSUE_LABEL_FEATURE_KEY,
);

const { selectAll, selectEntities } = issueLabelAdapter.getSelectors();

export const getIssueLabelLoaded = createSelector(
  getIssueLabelState,
  (state: State) => state.loaded,
);

export const getIssueLabelError = createSelector(
  getIssueLabelState,
  (state: State) => state.error,
);

export const getAllIssueLabel = createSelector(
  getIssueLabelState,
  (state: State) => selectAll(state),
);

export const getIssueLabelEntities = createSelector(
  getIssueLabelState,
  (state: State) => selectEntities(state),
);

export const getSelectedId = createSelector(
  getIssueLabelState,
  (state: State) => state.selectedId,
);

export const getSelected = createSelector(
  getIssueLabelEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined),
);
