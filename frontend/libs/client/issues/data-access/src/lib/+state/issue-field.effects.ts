import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as IssueFieldActions from './issue-field.actions';
import * as IssueFieldFeature from './issue-field.reducer';

@Injectable()
export class IssueFieldEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IssueFieldActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return IssueFieldActions.loadIssueFieldSuccess({ issueField: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return IssueFieldActions.loadIssueFieldFailure({ error });
        },
      }),
    ),
  );

  constructor(private readonly actions$: Actions) {}
}
