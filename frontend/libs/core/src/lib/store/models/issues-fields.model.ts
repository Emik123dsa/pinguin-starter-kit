import { EntityState } from '@ngrx/entity';
import { IssueFieldEntity } from '@pinguin/api';

export interface IssuesFieldsEntityState extends EntityState<IssueFieldEntity> {
  selectedIssueFieldId: Optional<number>;
  loading: boolean;
  loaded: boolean;
  error?: Optional<Error | string | unknown>;
}
