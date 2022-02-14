import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { IssuesLabelsEntity } from '../../models';
import { IssuesLabelsEntityState } from '../models';

export const issuesLabelsEntityAdapter =
  createEntityAdapter<IssuesLabelsEntity>({
    selectId: (entity: IssuesLabelsEntity) => entity.getId(),
    sortComparer: (entity: IssuesLabelsEntity) => entity.getId(),
  });

export const initialIssuesLabelsEntityState: IssuesLabelsEntityState =
  issuesLabelsEntityAdapter.getInitialState({
    loaded: false,
    error: undefined,
  });
