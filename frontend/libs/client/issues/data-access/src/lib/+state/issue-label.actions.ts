import { createAction, props } from '@ngrx/store';
import { IssueLabelEntity } from './issue-label.models';

export const init = createAction('[IssueLabel Page] Init');

export const loadIssueLabelSuccess = createAction(
  '[IssueLabel/API] Load IssueLabel Success',
  props<{ issueLabel: IssueLabelEntity[] }>(),
);

export const loadIssueLabelFailure = createAction(
  '[IssueLabel/API] Load IssueLabel Failure',
  props<{ error: any }>(),
);
