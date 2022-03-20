import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IssueLabelEntity } from '@pinguin/api';

import { IssuesLabelsEntityState } from '../models';

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

export const issuesLabelsEntityAdapter: EntityAdapter<IssueLabelEntity> =
  createEntityAdapter<IssueLabelEntity>({
    selectId: selectLabelId,
    sortComparer: sortByName,
  });

export const initialIssuesLabelsEntityState: IssuesLabelsEntityState =
  issuesLabelsEntityAdapter.getInitialState({
    selectedIssueLabelId: null,
    loaded: false,
    loading: false,
    error: null,
  });
