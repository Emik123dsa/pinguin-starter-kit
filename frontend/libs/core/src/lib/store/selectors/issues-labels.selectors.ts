import { EntityState, Dictionary } from '@ngrx/entity';
import { EntitySelectors } from '@ngrx/entity/src/models';

import {
  createSelector,
  DefaultProjectorFn,
  MemoizedSelector,
} from '@ngrx/store';

import { IssuesLabelEntity } from '@pinguin/api';

import { IssuesLabelsEntityState } from '../models';
import { issuesLabelsEntityAdapter } from '../state';

import { selectIssuesEntityState } from './issues.selectors';

export const issuesLabelsEntitySelectors: EntitySelectors<
  IssuesLabelEntity,
  EntityState<IssuesLabelEntity>
> = issuesLabelsEntityAdapter.getSelectors();

export const issuesLabelsEntityState: MemoizedSelector<
  object,
  IssuesLabelsEntityState,
  DefaultProjectorFn<IssuesLabelsEntityState>
> = createSelector(selectIssuesEntityState, (state) => state.labels);

const getSelectedIssueLabelId = (state: IssuesLabelsEntityState) =>
  state.selectedIssueLabelId;

export const selectCurrentIssueLabelId: MemoizedSelector<
  object,
  Optional<number> | undefined,
  DefaultProjectorFn<Optional<number> | undefined>
> = createSelector(issuesLabelsEntityState, getSelectedIssueLabelId);

export const selectIssuesLabelsLoaded: MemoizedSelector<
  object,
  boolean,
  DefaultProjectorFn<boolean>
> = createSelector(issuesLabelsEntityState, (state) => state.loaded);

export const selectIssuesLabelsLoading: MemoizedSelector<
  object,
  boolean,
  DefaultProjectorFn<boolean>
> = createSelector(issuesLabelsEntityState, (state) => state.loading);

export const selectAllIssuesLabels: MemoizedSelector<
  object,
  IssuesLabelEntity[],
  DefaultProjectorFn<IssuesLabelEntity[]>
> = createSelector(
  issuesLabelsEntityState,
  issuesLabelsEntitySelectors.selectAll,
);

export const selectIssuesLabelEntities: MemoizedSelector<
  object,
  Dictionary<IssuesLabelEntity>,
  DefaultProjectorFn<Dictionary<IssuesLabelEntity>>
> = createSelector(
  issuesLabelsEntityState,
  issuesLabelsEntitySelectors.selectEntities,
);

export const selectIssuesLabelIds: MemoizedSelector<
  object,
  string[] | number[],
  DefaultProjectorFn<string[] | number[]>
> = createSelector(
  issuesLabelsEntityState,
  issuesLabelsEntitySelectors.selectIds,
);

export const selectIssuesLabelTotal: MemoizedSelector<
  object,
  number,
  DefaultProjectorFn<number>
> = createSelector(
  issuesLabelsEntityState,
  issuesLabelsEntitySelectors.selectTotal,
);

export const selectCurrentIssueLabel: MemoizedSelector<
  object,
  IssuesLabelEntity | undefined,
  DefaultProjectorFn<IssuesLabelEntity | undefined>
> = createSelector(
  selectIssuesLabelEntities,
  selectCurrentIssueLabelId,
  (issueLabelEntities, issueLabelId) =>
    issueLabelEntities && issueLabelEntities[issueLabelId as number],
);
