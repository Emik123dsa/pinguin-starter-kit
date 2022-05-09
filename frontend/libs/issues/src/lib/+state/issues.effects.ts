import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as IssuesActions from './issues.actions';
import * as IssuesFeature from './issues.reducer';

@Injectable()
export class IssuesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IssuesActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return IssuesActions.loadIssuesSuccess({ issues: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return IssuesActions.loadIssuesFailure({ error });
        },
      }),
    ),
  );

  constructor(private readonly actions$: Actions) {}
}
