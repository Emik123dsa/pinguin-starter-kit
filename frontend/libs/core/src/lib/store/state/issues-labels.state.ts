import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IssuesLabelEntity } from '@pinguin/api';

import { IssuesLabelsEntityState } from '../models';

function selectById(entity: IssuesLabelEntity) {
  return entity.getId();
}

function sortByName(a: IssuesLabelEntity, b: IssuesLabelEntity) {
  return a.getName().localeCompare(b.getName());
}

export const issuesLabelsEntityAdapter: EntityAdapter<IssuesLabelEntity> =
  createEntityAdapter<IssuesLabelEntity>({
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
