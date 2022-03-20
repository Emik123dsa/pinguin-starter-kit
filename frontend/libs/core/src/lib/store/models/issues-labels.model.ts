import { EntityState } from '@ngrx/entity';
import { IssueLabelEntity } from '@pinguin/api';

export interface IssuesLabelsEntityState extends EntityState<IssueLabelEntity> {
  selectedIssueLabelId: Optional<number>;
  loaded: boolean;
  loading: boolean;
  error?: Optional<Error | string | unknown>;
}
