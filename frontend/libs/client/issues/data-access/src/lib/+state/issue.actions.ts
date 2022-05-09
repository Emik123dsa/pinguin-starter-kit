import { createAction, props } from '@ngrx/store';
import { IssueEntity } from './issue.models';

export const init = createAction('[Issue Page] Init');

export const loadIssueSuccess = createAction(
  '[Issue/API] Load Issue Success',
  props<{ issue: IssueEntity[] }>(),
);

export const loadIssueFailure = createAction(
  '[Issue/API] Load Issue Failure',
  props<{ error: any }>(),
);
