import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IssuesLabelsEntity } from '@pinguin/api';

import { IssuesLabelsEntityState } from '../models';

function selectById(entity: IssuesLabelsEntity) {
  return entity.getId();
}

function sortByName(a: IssuesLabelsEntity, b: IssuesLabelsEntity) {
  return a.getName().localeCompare(b.getName());
}

export const issuesLabelsEntityAdapter: EntityAdapter<IssuesLabelsEntity> =
  createEntityAdapter<IssuesLabelsEntity>({
    selectId: selectById,
    sortComparer: sortByName,
  });

export const initialIssuesLabelsEntityState: IssuesLabelsEntityState =
  issuesLabelsEntityAdapter.getInitialState({
    selectedIssueLabelId: null,
    loaded: false,
    loading: false,
    error: null,
  });
