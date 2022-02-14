import { Action } from '@ngrx/store';

import { IssuesLabelsEntity } from '../../models';
import { IssuesLabelsActionTypes } from '../constants';

export class GetIssuesLabelsAll implements Action {
  public readonly type = IssuesLabelsActionTypes.GetIssuesLabelsAll;
}

export class GetIssuesLabelsAllSuccess implements Action {
  public readonly type = IssuesLabelsActionTypes.GetIssuesLabelsAllSuccess;
  constructor(private readonly payload: IssuesLabelsEntity[]) {}
}

export class GetIssuesLabelsAllFailure implements Action {
  public readonly type = IssuesLabelsActionTypes.GetIssuesLabelsAllFailure;
  constructor(private readonly payload: object) {}
}

export type IssuesLabelsActions =
  | GetIssuesLabelsAll
  | GetIssuesLabelsAllSuccess
  | GetIssuesLabelsAllSuccess;
