import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IssueFieldEntity } from '@pinguin/api';

import { IssuesFieldsEntityState } from '../models';

/**
 * Select field entity ids.
 *
 * @param {IssueFieldEntity} entity
 * @returns {number}
 */
function selectFieldId(entity: IssueFieldEntity): number {
  return entity.getId();
}

/**
 * Sort entities by title.
 *
 * @param {IssueFieldEntity} aEntity
 * @param {IssueFieldEntity} bEntity
 * @returns {number}
 */
function sortByTitle(
  aEntity: IssueFieldEntity,
  bEntity: IssueFieldEntity,
): number {
  return aEntity.getTitle().localeCompare(bEntity.getTitle());
}
export const issuesFieldsEntityAdapter: EntityAdapter<IssueFieldEntity> =
  createEntityAdapter<IssueFieldEntity>({
    selectId: selectFieldId,
    sortComparer: sortByTitle,
  });

export const initialIssuesFieldsEntityState: IssuesFieldsEntityState =
  issuesFieldsEntityAdapter.getInitialState({
    selectedIssueFieldId: null,
    loaded: false,
    loading: false,
    error: undefined,
  });
