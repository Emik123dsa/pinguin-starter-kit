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
   * @param {IssueService} issueService
   */
  public constructor(
    private readonly actions$: Actions<IssuesTypeActions>,
    private readonly issueService: IssueService,
  ) {
    // Whether `IssuesLabelsEffects` was initialized successfully.
  }

  /**
   * loadIssuesLabels stream for loading labels fields.
   *
   * @type {(Observable<Action> & CreateEffectMetadata)}
   */
  loadIssuesLabels$: Observable<Action> & CreateEffectMetadata = createEffect(
    (): Observable<Action> =>
      this.actions$.pipe(
        ofType<TypedAction<IssuesLabelsActionTypes>>(
          IssuesLabelsActions.loadIssuesLabels,
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
            return this.issueService.findAllLabels().pipe(
              map((labels) =>
                IssuesLabelsActions.loadIssuesLabelsSuccess({
                  labels,
                }),
              ),
            );
          },

          onError: (
            action: TypedAction<IssuesLabelsActionTypes>,
            error: unknown,
          ) =>
            IssuesLabelsActions.loadIssuesLabelsFailure({
              error: { error, action },
            }),
        }),
      ),
  );
}
