import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

@Injectable()
export class IssuesFieldsEffects {
  constructor(private readonly actions$: Actions) {}
}
