import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { EntitySelectors } from '@ngrx/entity/src/models';
import { IssueFieldEntity } from '@pinguin/api';

import { IssuesFieldsState } from '../models';

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

export const issuesFieldsAdapter: EntityAdapter<IssueFieldEntity> =
  createEntityAdapter<IssueFieldEntity>({
    selectId: selectFieldId,
    sortComparer: sortByTitle,
  });

export const initialIssuesFieldsState: IssuesFieldsState =
  issuesFieldsAdapter.getInitialState({
    selectedIssueFieldId: null,
    loaded: false,
    loading: false,
    error: undefined,
  });

export const getSelectedIssueFieldId = (state: IssuesFieldsState) =>
  state.selectedIssueFieldId;

export const {
  selectIds: selectIssuesFieldIds,
  selectAll: selectAllIssuesFields,
  selectTotal: selectIssuesFieldTotal,
  selectEntities: selectIssuesFieldEntities,
}: EntitySelectors<
  IssueFieldEntity,
  EntityState<IssueFieldEntity>
> = issuesFieldsAdapter.getSelectors();
