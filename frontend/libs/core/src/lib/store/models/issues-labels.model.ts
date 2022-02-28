import { EntityState } from '@ngrx/entity';
import { IssuesLabelsEntity } from '@pinguin/api';

export interface IssuesLabelsEntityState
  extends EntityState<IssuesLabelsEntity> {
  selectedIssueLabelId?: Optional<number>;
  loaded: boolean;
  loading: boolean;
  error?: Optional<Error | string | unknown>;
}
