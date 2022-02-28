import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  CreateEffectMetadata,
  ofType,
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import { fetch } from '@nrwl/angular';

import { IssuesService } from '@pinguin/api';

import { IssuesFieldsActions } from '../actions';
import { IssuesFieldsActionTypes } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class IssuesFieldsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly issuesService: IssuesService,
  ) {}

  /**
   * loadAllIssuesFields stream for loading Fields fields.
   *
   * @type {(Observable<Action> & CreateEffectMetadata)}
   */
  loadAllIssuesFields$: Observable<Action> & CreateEffectMetadata =
    createEffect(
      (): Observable<Action> =>
        this.actions$.pipe(
          ofType<TypedAction<IssuesFieldsActionTypes>>(
            IssuesFieldsActions.loadAllIssuesFields,
          ),
          map((action: TypedAction<IssuesFieldsActionTypes>) => action),
          fetch({
            id: (
              action: TypedAction<IssuesFieldsActionTypes>,
            ): IssuesFieldsActionTypes => {
              return action.type;
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            run: (action: TypedAction<IssuesFieldsActionTypes>) => {
              return this.issuesService.findAllFields().pipe(
                map((fields) =>
                  IssuesFieldsActions.loadAllIssuesFieldsSuccess({
                    fields,
                  }),
                ),
              );
            },

            onError: (
              action: TypedAction<IssuesFieldsActionTypes>,
              error: unknown,
            ) =>
              IssuesFieldsActions.loadAllIssuesFieldsFailure({
                error: { error, action },
              }),
          }),
        ),
    );
}
