import { createAction, props } from '@ngrx/store';
import { IssuesEntity } from './issues.models';

export const loadIssues = createAction('[Issues Page] Init');

export const loadIssuesSuccess = createAction(
  '[Issues/API] Load Issues Success',
  props<{ issues: IssuesEntity[] }>(),
);

export const loadIssuesFailure = createAction(
  '[Issues/API] Load Issues Failure',
  props<{ error: any }>(),
);
