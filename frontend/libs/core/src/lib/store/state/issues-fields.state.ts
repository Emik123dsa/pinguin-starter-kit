import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IssuesFieldsEntity } from '@pinguin/api';

import { IssuesFieldsEntityState } from '../models';

export const issuesFieldsEntityAdapter: EntityAdapter<IssuesFieldsEntity> =
  createEntityAdapter<IssuesFieldsEntity>({
    selectId: (entity: IssuesFieldsEntity) => entity.getId(),
    sortComparer: (entity: IssuesFieldsEntity) => entity.getId(),
  });

export const initialIssuesFieldsEntityState: IssuesFieldsEntityState =
  issuesFieldsEntityAdapter.getInitialState({
    loaded: false,
    error: undefined,
  });
