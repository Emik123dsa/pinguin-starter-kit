import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IssuesLabelsEntity } from '@pinguin/api';

import { IssuesLabelsEntityState } from '../models';

export const issuesLabelsEntityAdapter: EntityAdapter<IssuesLabelsEntity> =
  createEntityAdapter<IssuesLabelsEntity>({
    selectId: (entity: IssuesLabelsEntity) => entity.getId(),
    sortComparer: (entity: IssuesLabelsEntity) => entity.getId(),
  });

export const initialIssuesLabelsEntityState: IssuesLabelsEntityState =
  issuesLabelsEntityAdapter.getInitialState({
    loaded: false,
    error: undefined,
  });
