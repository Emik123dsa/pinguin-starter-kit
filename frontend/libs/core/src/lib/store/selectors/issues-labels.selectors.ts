import { Dictionary } from '@ngrx/entity';

import {
  createSelector,
  DefaultProjectorFn,
  MemoizedSelector,
} from '@ngrx/store';

import { IssueLabelEntity } from '@pinguin/api';

import { IssuesLabelsState } from '../models';
import { getIssuesState } from './issues.selectors';
import {
  selectIssuesLabelIds,
  selectAllIssuesLabels,
  selectIssuesLabelEntities,
  selectIssuesLabelTotal,
} from '../state';

export const getIssuesLabelsState: MemoizedSelector<
  object,
  IssuesLabelsState,
  DefaultProjectorFn<IssuesLabelsState>
> = createSelector(getIssuesState, (state) => state.labels);

const getSelectedIssueLabelId = (state: IssuesLabelsState) =>
  state.selectedIssueLabelId;

export const getCurrentIssueLabelId: MemoizedSelector<
  object,
  Optional<number>,
  DefaultProjectorFn<Optional<number>>
> = createSelector(getIssuesLabelsState, getSelectedIssueLabelId);

export const getIssuesLabelsLoaded: MemoizedSelector<
  object,
  boolean,
  DefaultProjectorFn<boolean>
> = createSelector(getIssuesLabelsState, (state) => state.loaded);

export const getIssuesLabelsLoading: MemoizedSelector<
  object,
  boolean,
  DefaultProjectorFn<boolean>
> = createSelector(getIssuesLabelsState, (state) => state.loading);

export const getAllIssuesLabels: MemoizedSelector<
  object,
  IssueLabelEntity[],
  DefaultProjectorFn<IssueLabelEntity[]>
> = createSelector(getIssuesLabelsState, selectAllIssuesLabels);

export const getIssuesLabelEntities: MemoizedSelector<
  object,
  Dictionary<IssueLabelEntity>,
  DefaultProjectorFn<Dictionary<IssueLabelEntity>>
> = createSelector(getIssuesLabelsState, selectIssuesLabelEntities);

export const getIssuesLabelIds: MemoizedSelector<
  object,
  string[] | number[],
  DefaultProjectorFn<string[] | number[]>
> = createSelector(getIssuesLabelsState, selectIssuesLabelIds);

export const getIssuesLabelTotal: MemoizedSelector<
  object,
  number,
  DefaultProjectorFn<number>
> = createSelector(getIssuesLabelsState, selectIssuesLabelTotal);

export const getCurrentIssueLabel = createSelector(
  getIssuesLabelEntities,
  getCurrentIssueLabelId,
  (issuesLabelEntities: Dictionary<IssueLabelEntity>, issueLabelId) =>
    issueLabelId && issuesLabelEntities[issueLabelId],
);
