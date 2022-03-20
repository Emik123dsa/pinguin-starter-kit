import { EntityState, Dictionary } from '@ngrx/entity';
import { EntitySelectors } from '@ngrx/entity/src/models';

import {
  createSelector,
  DefaultProjectorFn,
  MemoizedSelector,
} from '@ngrx/store';

import { IssueFieldEntity } from '@pinguin/api';

import { IssuesFieldsEntityState } from '../models';
import { issuesFieldsEntityAdapter } from '../state';

import { selectIssuesEntityState } from './issues.selectors';

export const issuesFieldsEntitySelectors: EntitySelectors<
  IssueFieldEntity,
  EntityState<IssueFieldEntity>
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
  Optional<number>,
  DefaultProjectorFn<Optional<number>>
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
  IssueFieldEntity[],
  DefaultProjectorFn<IssueFieldEntity[]>
> = createSelector(
  issuesFieldsEntityState,
  issuesFieldsEntitySelectors.selectAll,
);

export const selectIssuesFieldEntities: MemoizedSelector<
  object,
  Dictionary<IssueFieldEntity>,
  DefaultProjectorFn<Dictionary<IssueFieldEntity>>
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
  IssueFieldEntity | undefined,
  DefaultProjectorFn<IssueFieldEntity | undefined>
> = createSelector(
  selectIssuesFieldEntities,
  selectCurrentIssueFieldId,
  (issuesFieldEntities, issueFieldId) =>
    issuesFieldEntities && issuesFieldEntities[issueFieldId as number],
);
