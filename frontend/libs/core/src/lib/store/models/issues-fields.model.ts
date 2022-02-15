import { EntityState } from '@ngrx/entity';
import { IssuesFieldsEntity } from '@pinguin/api';

export interface IssuesFieldsEntityState
  extends EntityState<IssuesFieldsEntity> {
  selectedIssueFieldId?: number;
  loaded: boolean;
  error?: Optional<string>;
}
