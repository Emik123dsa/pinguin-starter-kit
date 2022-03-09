export enum IssuesFieldsActionTypes {
  // Load all issues fields action types.
  LoadAllIssuesFields = '[Issues Fields/API] Load All Issues Fields',
  LoadAllIssuesFieldsSuccess = '[Issues Fields/API] Load All Issues Fields Success',
  LoadAllIssuesFieldsFailure = '[Issues Fields/API] Load All Issues Fields Failure',

  // HINT: will be used in the case of updating current fields.
  // Set many issues fields action types.
  SetManyIssuesFields = '[Issues Fields/API] Set Many Issues Fields',
  SetManyIssuesFieldsSuccess = '[Issues Fields/API] Set Many Issues Fields Success',
  SetManyIssuesFieldsFailure = '[Issues Fields/API] Set Many Issues Fields Failure',

  // HINT: will be used in the case of updating current fields.
  // Add many issues fields action types.
  AddManyIssuesFields = '[Issues Fields/API] Add Many Issues Fields',
  AddManyIssuesFieldsSuccess = '[Issues Fields/API] Add Many Issues Fields Success',
  AddManyIssuesFieldsFailure = '[Issues Fields/API] Add Many Issues Fields Failure',
}
