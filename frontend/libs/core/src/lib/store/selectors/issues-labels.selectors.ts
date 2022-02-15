import { EntityState, Dictionary } from '@ngrx/entity';
import { EntitySelectors } from '@ngrx/entity/src/models';

import {
  createSelector,
  DefaultProjectorFn,
  MemoizedSelector,
} from '@ngrx/store';

import { IssuesLabelsEntity } from '@pinguin/api';

import { IssuesLabelsEntityState } from '../models';
import { issuesLabelsEntityAdapter } from '../state';

import { selectIssuesLabelsEntityState } from './issues.selectors';

export const issuesLabelsEntitySelectors: EntitySelectors<
  IssuesLabelsEntity,
  EntityState<IssuesLabelsEntity>
> = issuesLabelsEntityAdapter.getSelectors();

export const issuesLabelsSelector: MemoizedSelector<
  object,
  IssuesLabelsEntityState,
  DefaultProjectorFn<IssuesLabelsEntityState>
> = createSelector(
  selectIssuesLabelsEntityState,
  (state) => state.issuesLabels,
);

export const selectIssuesLabelsAll: MemoizedSelector<
  object,
  IssuesLabelsEntity[],
  DefaultProjectorFn<IssuesLabelsEntity[]>
> = createSelector(issuesLabelsSelector, issuesLabelsEntitySelectors.selectAll);

export const selectIssuesLabelsEntities: MemoizedSelector<
  object,
  Dictionary<IssuesLabelsEntity>,
  DefaultProjectorFn<Dictionary<IssuesLabelsEntity>>
> = createSelector(
  issuesLabelsSelector,
  issuesLabelsEntitySelectors.selectEntities,
);

export const selectIssuesLabelsIds: MemoizedSelector<
  object,
  string[] | number[],
  DefaultProjectorFn<string[] | number[]>
> = createSelector(issuesLabelsSelector, issuesLabelsEntitySelectors.selectIds);

export const selectIssuesLabelsTotal: MemoizedSelector<
  object,
  number,
  DefaultProjectorFn<number>
> = createSelector(
  issuesLabelsSelector,
  issuesLabelsEntitySelectors.selectTotal,
);
