import { Action } from '@ngrx/store';

import { IssuesFieldsEntity } from '../../models';
import { IssuesFieldsActionTypes } from '../constants';

export class GetIssuesFieldsAll implements Action {
  public readonly type = IssuesFieldsActionTypes.GetIssuesFieldsAll;
}

export class GetIssuesFieldsAllSuccess implements Action {
  public readonly type = IssuesFieldsActionTypes.GetIssuesFieldsAllSuccess;
  constructor(private readonly payload: IssuesFieldsEntity[]) {}
}

export class GetIssuesFieldsAllFailure implements Action {
  public readonly type = IssuesFieldsActionTypes.GetIssuesFieldsAllFailure;
  constructor(private readonly payload: object) {}
}

export type IssuesFieldsActions =
  | GetIssuesFieldsAll
  | GetIssuesFieldsAllSuccess
  | GetIssuesFieldsAllFailure;
