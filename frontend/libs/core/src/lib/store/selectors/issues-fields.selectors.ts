import { EntityState, Dictionary } from '@ngrx/entity';
import { EntitySelectors } from '@ngrx/entity/src/models';

import {
  createSelector,
  DefaultProjectorFn,
  MemoizedSelector,
} from '@ngrx/store';

import { IssuesFieldsEntity } from '@pinguin/api';

import { IssuesFieldsEntityState } from '../models';
import { issuesFieldsEntityAdapter } from '../state';

import { selectIssuesEntityState } from './issues.selectors';

export const issuesFieldsEntitySelectors: EntitySelectors<
  IssuesFieldsEntity,
  EntityState<IssuesFieldsEntity>
> = issuesFieldsEntityAdapter.getSelectors();

export const issuesFieldsEntityState: MemoizedSelector<
  object,
  IssuesFieldsEntityState,
  DefaultProjectorFn<IssuesFieldsEntityState>
> = createSelector(selectIssuesEntityState, (state) => state.fields);

const getSelectedIssueFieldId = (state: IssuesFieldsEntityState) =>
  state.selectedIssueFieldId;

export const selectCurrentIssueFieldId: MemoizedSelector<
  object,
  Optional<number> | undefined,
  DefaultProjectorFn<Optional<number> | undefined>
> = createSelector(issuesFieldsEntityState, getSelectedIssueFieldId);

export const selectIssuesFieldsLoaded: MemoizedSelector<
  object,
  boolean,
  DefaultProjectorFn<boolean>
> = createSelector(issuesFieldsEntityState, (state) => state.loaded);

export const selectIssuesFieldsLoading: MemoizedSelector<
  object,
  boolean,
  DefaultProjectorFn<boolean>
> = createSelector(issuesFieldsEntityState, (state) => state.loading);

export const selectAllIssuesFields: MemoizedSelector<
  object,
  IssuesFieldsEntity[],
  DefaultProjectorFn<IssuesFieldsEntity[]>
> = createSelector(
  issuesFieldsEntityState,
  issuesFieldsEntitySelectors.selectAll,
);

export const selectIssuesFieldEntities: MemoizedSelector<
  object,
  Dictionary<IssuesFieldsEntity>,
  DefaultProjectorFn<Dictionary<IssuesFieldsEntity>>
> = createSelector(
  issuesFieldsEntityState,
  issuesFieldsEntitySelectors.selectEntities,
);

export const selectIssuesFieldIds: MemoizedSelector<
  object,
  string[] | number[],
  DefaultProjectorFn<string[] | number[]>
> = createSelector(
  issuesFieldsEntityState,
  issuesFieldsEntitySelectors.selectIds,
);

export const selectIssuesFieldTotal: MemoizedSelector<
  object,
  number,
  DefaultProjectorFn<number>
> = createSelector(
  issuesFieldsEntityState,
  issuesFieldsEntitySelectors.selectTotal,
);

export const selectCurrentIssueField: MemoizedSelector<
  object,
  IssuesFieldsEntity | undefined,
  DefaultProjectorFn<IssuesFieldsEntity | undefined>
> = createSelector(
  selectIssuesFieldEntities,
  selectCurrentIssueFieldId,
  (issueFieldEntities, issueFieldId) =>
    issueFieldEntities && issueFieldEntities[issueFieldId as number],
);
