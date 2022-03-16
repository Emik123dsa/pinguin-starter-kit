import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IssueLabelEntity } from '@pinguin/api';

import { IssuesLabelsEntityState } from '../models';

function selectById(entity: IssueLabelEntity) {
  return entity.getId();
}

function sortByName(a: IssueLabelEntity, b: IssueLabelEntity) {
  return a.getName().localeCompare(b.getName());
}

export const issuesLabelsEntityAdapter: EntityAdapter<IssueLabelEntity> =
  createEntityAdapter<IssueLabelEntity>({
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
