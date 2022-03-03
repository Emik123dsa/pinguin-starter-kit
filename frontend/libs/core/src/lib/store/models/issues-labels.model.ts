import { EntityState } from '@ngrx/entity';
import { IssuesLabelEntity } from '@pinguin/api';

export interface IssuesLabelsEntityState extends EntityState<IssuesLabelEntity> {
  selectedIssueLabelId?: Optional<number>;
  loaded: boolean;
  loading: boolean;
  error?: Optional<Error | string | unknown>;
}
