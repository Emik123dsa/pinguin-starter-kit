import { EntityState } from '@ngrx/entity';
import { IssuesFieldsEntity } from '@pinguin/api';

export interface IssuesFieldsEntityState
  extends EntityState<IssuesFieldsEntity> {
  selectedIssueFieldId?: Optional<number>;
  loading: boolean;
  loaded: boolean;
  error?: Optional<Error | string | unknown>;
}
