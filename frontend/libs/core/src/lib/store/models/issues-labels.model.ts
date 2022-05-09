import { EntityState } from '@ngrx/entity';
import { IssueLabelEntity } from '@pinguin/api';

export interface IssuesLabelsState extends EntityState<IssueLabelEntity> {
  selectedIssueLabelId: Optional<number>;
  loaded: boolean;
  loading: boolean;
  error?: Optional<Error | string | unknown>;
}

export interface IssuesLabelsPartialState {
  readonly labels: IssuesLabelsState;
}
