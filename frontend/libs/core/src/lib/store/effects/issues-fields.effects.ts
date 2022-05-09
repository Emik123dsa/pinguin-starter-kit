import { fetch } from '@nrwl/angular';
import { map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { IssueService } from '@pinguin/api';

import {
  Actions,
  createEffect,
  CreateEffectMetadata,
  ofType,
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import { IssuesFieldsActions } from '../actions';
import { IssuesFieldsActionTypes } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class IssuesFieldsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly issueService: IssueService,
  ) {}

  /**
   * loadIssuesFields stream for loading Fields fields.
   *
   * @type {(Observable<Action> & CreateEffectMetadata)}
   */
  public loadIssuesFields$: Observable<Action> & CreateEffectMetadata =
    createEffect(
      (): Observable<Action> =>
        this.actions$.pipe(
          ofType<TypedAction<IssuesFieldsActionTypes>>(
            IssuesFieldsActions.loadIssuesFields,
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
              return this.issueService.findAllFields().pipe(
                map((fields) =>
                  IssuesFieldsActions.loadIssuesFieldsSuccess({
                    fields,
                  }),
                ),
              );
            },

            onError: (
              action: TypedAction<IssuesFieldsActionTypes>,
              error: unknown,
            ) =>
              IssuesFieldsActions.loadIssuesFieldsFailure({
                error: { error, action },
              }),
          }),
        ),
    );
}
