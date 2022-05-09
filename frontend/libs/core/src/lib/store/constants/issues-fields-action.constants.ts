export enum IssuesFieldsActionTypes {
  // Load all issues fields action types.
  LoadIssuesFields = '[IssueField/API] Load Issues Fields',
  LoadIssuesFieldsSuccess = '[IssueField/API] Load Issues Fields Success',
  LoadIssuesFieldsFailure = '[IssueField/API] Load Issues Fields Failure',

  // NOTE: will be used in the case of updating current fields.
  // Set many issues fields action types.
  SetIssuesFields = '[IssueField/API] Set Issues Fields',
  SetIssuesFieldsSuccess = '[IssueField/API] Set Many Issues Fields Success',
  SetIssuesFieldsFailure = '[IssueField/API] Set Many Issues Fields Failure',

  // NOTE: will be used in the case of updating current fields.
  // Add many issues fields action types.
  AddIssuesFields = '[IssueField/API] Add Issues Fields',
  AddIssuesFieldsSuccess = '[IssueField/API] Add Issues Fields Success',
  AddIssuesFieldsFailure = '[IssueField/API] Add Issues Fields Failure',
}
