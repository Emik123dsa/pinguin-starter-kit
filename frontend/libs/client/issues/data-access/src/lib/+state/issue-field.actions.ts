import { createAction, props } from '@ngrx/store';
import { IssueFieldEntity } from './issue-field.models';

export const init = createAction('[IssueField Page] Init');

export const loadIssueFieldSuccess = createAction(
  '[IssueField/API] Load IssueField Success',
  props<{ issueField: IssueFieldEntity[] }>(),
);

export const loadIssueFieldFailure = createAction(
  '[IssueField/API] Load IssueField Failure',
  props<{ error: any }>(),
);
