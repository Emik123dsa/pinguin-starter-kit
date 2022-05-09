import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as IssueActions from './issue.actions';
import * as IssueFeature from './issue.reducer';

@Injectable()
export class IssueEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IssueActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return IssueActions.loadIssueSuccess({ issue: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return IssueActions.loadIssueFailure({ error });
        },
      }),
    ),
  );

  constructor(private readonly actions$: Actions) {}
}
