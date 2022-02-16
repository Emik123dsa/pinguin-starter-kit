import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class IssuesFieldsEffects {
  constructor(private readonly actions$: Actions) {}
}
