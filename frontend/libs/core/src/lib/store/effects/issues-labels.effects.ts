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
import { IssuesActions, IssuesLabelsEntityActions } from '../actions';

@Injectable({
  providedIn: 'root',
})
export class IssuesLabelsEffects {
  /**
   * Creates an instance of IssuesLabelsEffects.
   *
   * @constructor
   * @public
   * @param {Actions<IssuesActions>} actions$
   * @param {IssuesService} issuesService
   */
  public constructor(
    private readonly actions$: Actions<IssuesActions>,
    private readonly issuesService: IssuesService,
  ) {
    // Whether `IssuesLabelsEffects` was initialized successfully.
  }

  /**
   * loadIssuesLabelsAll stream for loading labels fields.
   *
   * @type {(Observable<Action> & CreateEffectMetadata)}
   */
  loadIssuesLabelsAll$: Observable<Action> & CreateEffectMetadata =
    createEffect(
      (): Observable<Action> =>
        this.actions$.pipe(
          ofType<TypedAction<IssuesLabelsActionTypes>>(
            IssuesLabelsEntityActions.loadIssuesLabelsAll,
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
                map((issuesLabels) =>
                  IssuesLabelsEntityActions.loadIssuesLabelsAllSuccess({
                    issuesLabels,
                  }),
                ),
              );
            },
            onError: (
              action: TypedAction<IssuesLabelsActionTypes>,
              error: unknown,
            ) =>
              IssuesLabelsEntityActions.loadIssuesLabelsAllFailure({
                error: { error, action },
              }),
          }),
        ),
    );
}
