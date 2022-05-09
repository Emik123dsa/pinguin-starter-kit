import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { EntitySelectors } from '@ngrx/entity/src/models';
import { IssueLabelEntity } from '@pinguin/api';

import { IssuesLabelsState } from '../models';

/**
 * Select entities by id.
 *
 * @param {IssueLabelEntity} entity
 * @returns {number}
 */
function selectLabelId(entity: IssueLabelEntity): number {
  return entity.getId();
}

/**
 * Sort entities by name.
 *
 * @param {IssueLabelEntity} aEntity
 * @param {IssueLabelEntity} bEntity
 * @returns {number}
 */
function sortByName(
  aEntity: IssueLabelEntity,
  bEntity: IssueLabelEntity,
): number {
  return aEntity.getName().localeCompare(bEntity.getName());
}

export const issuesLabelsAdapter: EntityAdapter<IssueLabelEntity> =
  createEntityAdapter<IssueLabelEntity>({
    selectId: selectLabelId,
    sortComparer: sortByName,
  });

export const initialIssuesLabelsState: IssuesLabelsState =
  issuesLabelsAdapter.getInitialState({
    selectedIssueLabelId: null,
    loaded: false,
    loading: false,
    error: null,
  });

export const {
  selectIds: selectIssuesLabelIds,
  selectAll: selectAllIssuesLabels,
  selectTotal: selectIssuesLabelTotal,
  selectEntities: selectIssuesLabelEntities,
}: EntitySelectors<
  IssueLabelEntity,
  EntityState<IssueLabelEntity>
> = issuesLabelsAdapter.getSelectors();
