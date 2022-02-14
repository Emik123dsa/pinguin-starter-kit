import { EntityState } from '@ngrx/entity';
import { IssuesLabelsEntity } from '../../models';

export interface IssuesLabelsEntityState
  extends EntityState<IssuesLabelsEntity> {
  loaded: boolean;
  error?: string | null;
}
