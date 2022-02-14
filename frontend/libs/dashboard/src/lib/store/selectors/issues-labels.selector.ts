import { EntityState, Dictionary } from '@ngrx/entity';
import { EntitySelectors } from '@ngrx/entity/src/models';

import {
  createSelector,
  DefaultProjectorFn,
  MemoizedSelector,
} from '@ngrx/store';

import { IssuesLabelsEntity } from '../../models';

import { IssuesLabelsEntityState } from '../models';
import { issuesLabelsEntityAdapter } from '../state';

import { issuesLabelsEntityState } from './issues.selector';

export const issuesLabelsEntitySelectors: EntitySelectors<
  IssuesLabelsEntity,
  EntityState<IssuesLabelsEntity>
> = issuesLabelsEntityAdapter.getSelectors();

export const issuesLabelsSelector: MemoizedSelector<
  object,
  IssuesLabelsEntityState,
  DefaultProjectorFn<IssuesLabelsEntityState>
> = createSelector(issuesLabelsEntityState, (state) => state.issuesLabels);

export const issuesLabelsAll: MemoizedSelector<
  object,
  IssuesLabelsEntity[],
  DefaultProjectorFn<IssuesLabelsEntity[]>
> = createSelector(issuesLabelsSelector, issuesLabelsEntitySelectors.selectAll);

export const issuesLabelsEntities: MemoizedSelector<
  object,
  Dictionary<IssuesLabelsEntity>,
  DefaultProjectorFn<Dictionary<IssuesLabelsEntity>>
> = createSelector(
  issuesLabelsSelector,
  issuesLabelsEntitySelectors.selectEntities,
);

export const issuesLabelsIds: MemoizedSelector<
  object,
  string[] | number[],
  DefaultProjectorFn<string[] | number[]>
> = createSelector(issuesLabelsSelector, issuesLabelsEntitySelectors.selectIds);

export const issuesLabelsTotal: MemoizedSelector<
  object,
  number,
  DefaultProjectorFn<number>
> = createSelector(
  issuesLabelsSelector,
  issuesLabelsEntitySelectors.selectTotal,
);
