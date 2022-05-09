import { Dictionary } from '@ngrx/entity';

import {
  createSelector,
  DefaultProjectorFn,
  MemoizedSelector,
} from '@ngrx/store';

import { IssueFieldEntity } from '@pinguin/api';

import { IssuesFieldsState } from '../models';
import { getIssuesState } from './issues.selectors';
import {
  getSelectedIssueFieldId,
  selectIssuesFieldIds,
  selectAllIssuesFields,
  selectIssuesFieldEntities,
  selectIssuesFieldTotal,
} from '../state';

export const getIssuesFieldsState: MemoizedSelector<
  object,
  IssuesFieldsState,
  DefaultProjectorFn<IssuesFieldsState>
> = createSelector(getIssuesState, (state) => state.fields);

export const getCurrentIssueFieldId: MemoizedSelector<
  object,
  Optional<number>,
  DefaultProjectorFn<Optional<number>>
> = createSelector(getIssuesFieldsState, getSelectedIssueFieldId);

export const getIssuesFieldsLoaded: MemoizedSelector<
  object,
  boolean,
  DefaultProjectorFn<boolean>
> = createSelector(getIssuesFieldsState, (state) => state.loaded);

export const getIssuesFieldsLoading: MemoizedSelector<
  object,
  boolean,
  DefaultProjectorFn<boolean>
> = createSelector(getIssuesFieldsState, (state) => state.loading);

export const getAllIssuesFields: MemoizedSelector<
  object,
  IssueFieldEntity[],
  DefaultProjectorFn<IssueFieldEntity[]>
> = createSelector(getIssuesFieldsState, selectAllIssuesFields);

export const getIssuesFieldEntities: MemoizedSelector<
  object,
  Dictionary<IssueFieldEntity>,
  DefaultProjectorFn<Dictionary<IssueFieldEntity>>
> = createSelector(getIssuesFieldsState, selectIssuesFieldEntities);

export const getIssuesFieldIds: MemoizedSelector<
  object,
  string[] | number[],
  DefaultProjectorFn<string[] | number[]>
> = createSelector(getIssuesFieldsState, selectIssuesFieldIds);

export const getIssuesFieldTotal: MemoizedSelector<
  object,
  number,
  DefaultProjectorFn<number>
> = createSelector(getIssuesFieldsState, selectIssuesFieldTotal);

export const getCurrentIssueField = createSelector(
  selectIssuesFieldEntities,
  getCurrentIssueFieldId,
  (issuesFieldEntities, issueFieldId) =>
    issueFieldId && issuesFieldEntities[issueFieldId],
);
