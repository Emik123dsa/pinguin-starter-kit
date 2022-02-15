import { EntityState } from '@ngrx/entity';
import { IssuesLabelsEntity } from '@pinguin/api';

export interface IssuesLabelsEntityState
  extends EntityState<IssuesLabelsEntity> {
  selectedIssueLabelId?: number;
  loaded: boolean;
  error?: Optional<string>;
}
