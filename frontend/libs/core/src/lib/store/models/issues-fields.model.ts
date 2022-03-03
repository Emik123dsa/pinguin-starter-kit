import { EntityState } from '@ngrx/entity';
import { IssuesFieldEntity } from '@pinguin/api';

export interface IssuesFieldsEntityState extends EntityState<IssuesFieldEntity> {
  selectedIssueFieldId?: Optional<number>;
  loading: boolean;
  loaded: boolean;
  error?: Optional<Error | string | unknown>;
}
