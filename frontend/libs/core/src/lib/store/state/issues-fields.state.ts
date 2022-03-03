import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IssuesFieldEntity } from '@pinguin/api';

import { IssuesFieldsEntityState } from '../models';

export const issuesFieldsEntityAdapter: EntityAdapter<IssuesFieldEntity> =
  createEntityAdapter<IssuesFieldEntity>({
    selectId: (entity: IssuesFieldEntity) => entity.getId(),
    sortComparer: (entity: IssuesFieldEntity) => entity.getId(),
  });

export const initialIssuesFieldsEntityState: IssuesFieldsEntityState =
  issuesFieldsEntityAdapter.getInitialState({
    selectedIssueFieldId: null,
    loaded: false,
    loading: false,
    error: undefined,
  });
