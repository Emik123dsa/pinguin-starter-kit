import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as IssueLabelActions from './issue-label.actions';
import * as IssueLabelFeature from './issue-label.reducer';

@Injectable()
export class IssueLabelEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IssueLabelActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return IssueLabelActions.loadIssueLabelSuccess({ issueLabel: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return IssueLabelActions.loadIssueLabelFailure({ error });
        },
      }),
    ),
  );

  constructor(private readonly actions$: Actions) {}
}
