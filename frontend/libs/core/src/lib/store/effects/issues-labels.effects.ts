import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  CreateEffectMetadata,
  ofType,
} from '@ngrx/effects';
import { TypedAction } from '@ngrx/store/src/models';
import { Action } from '@ngrx/store';

import { fetch } from '@nrwl/angular';
import { IssuesService } from '@pinguin/api';

import { IssuesLabelsActionTypes } from '../constants';
import { IssuesTypeActions, IssuesLabelsActions } from '../actions';

@Injectable({
  providedIn: 'root',
})
export class IssuesLabelsEffects {
  /**
   * Creates an instance of IssuesLabelsEffects.
   *
   * @constructor
   * @public
   * @param {Actions<IssuesTypeActions>} actions$
   * @param {IssuesService} issuesService
   */
  public constructor(
    private readonly actions$: Actions<IssuesTypeActions>,
    private readonly issuesService: IssuesService,
  ) {
    // Whether `IssuesLabelsEffects` was initialized successfully.
  }

  /**
   * loadAllIssuesLabels stream for loading labels fields.
   *
   * @type {(Observable<Action> & CreateEffectMetadata)}
   */
  loadAllIssuesLabels$: Observable<Action> & CreateEffectMetadata =
    createEffect(
      (): Observable<Action> =>
        this.actions$.pipe(
          ofType<TypedAction<IssuesLabelsActionTypes>>(
            IssuesLabelsActions.loadAllIssuesLabels,
          ),
          map((action: TypedAction<IssuesLabelsActionTypes>) => action),
          fetch({
            id: (
              action: TypedAction<IssuesLabelsActionTypes>,
            ): IssuesLabelsActionTypes => {
              return action.type;
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            run: (action: TypedAction<IssuesLabelsActionTypes>) => {
              return this.issuesService.findAllLabels().pipe(
                map((labels) =>
                  IssuesLabelsActions.loadAllIssuesLabelsSuccess({
                    labels,
                  }),
                ),
              );
            },

            onError: (
              action: TypedAction<IssuesLabelsActionTypes>,
              error: unknown,
            ) =>
              IssuesLabelsActions.loadAllIssuesLabelsFailure({
                error: { error, action },
              }),
          }),
        ),
    );
}
