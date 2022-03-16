import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IssueFieldEntity } from '@pinguin/api';

import { IssuesFieldsEntityState } from '../models';

export const issuesFieldsEntityAdapter: EntityAdapter<IssueFieldEntity> =
  createEntityAdapter<IssueFieldEntity>({
    selectId: (entity: IssueFieldEntity) => entity.getId(),
    sortComparer: (entity: IssueFieldEntity) => entity.getId(),
  });

export const initialIssuesFieldsEntityState: IssuesFieldsEntityState =
  issuesFieldsEntityAdapter.getInitialState({
    selectedIssueFieldId: null,
    loaded: false,
    loading: false,
    error: undefined,
  });
