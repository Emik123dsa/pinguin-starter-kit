/* eslint-disable @typescript-eslint/no-unused-vars */

import { Observable } from 'rxjs';
import { APP_BASE_HREF } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Actions, createEffect, CreateEffectMetadata } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DataPersistence } from '@nrwl/angular';
import { CoreState, IssuesFieldsActions, RouterActions } from '@pinguin/core';

/** @internal actions and containers. */
import { IssuesRoadmapContainerActions } from '../actions';
import { IssuesRoadmapContainerComponent } from '../../containers/issues-roadmap-container';

@Injectable({
  providedIn: 'root',
})
export class IssuesRoadmapContainerEffects {
  /**
   * Creates an instance of DashboardLayoutEffects.
   *
   * @constructor
   * @public
   * @param {Actions} actions$
   * @param {IssueService} IssueService
   */
  public constructor(
    private readonly actions$: Actions,
    private readonly dataPersistence: DataPersistence<CoreState>,
    @Inject(APP_BASE_HREF) private readonly redirectUri: string,
  ) {
    // Whether `DashboardLayoutEffects` was initialized successfully.
  }

  /**
   * initIssuesRoadmap$ stream for initializing issues roadmap.
   *
   * @type {(Observable<Action> & CreateEffectMetadata)}
   */
  public initContainer$: Observable<Action> & CreateEffectMetadata =
    createEffect(() =>
      this.dataPersistence.navigation(IssuesRoadmapContainerComponent, {
        run: (route: ActivatedRouteSnapshot) => {
          return IssuesRoadmapContainerActions.initIssuesRoadmap();
        },
        onError: (route: ActivatedRouteSnapshot, error: unknown) => {
          return RouterActions.navigateByUrl({ url: this.redirectUri });
        },
      }),
    );

  initIssuesRoadmap$: Observable<Action> & CreateEffectMetadata = createEffect(
    () =>
      this.dataPersistence.optimisticUpdate(
        IssuesRoadmapContainerActions.initIssuesRoadmap,
        {
          run: (action: IssuesRoadmapContainerActions) => {
            return IssuesFieldsActions.loadIssuesFields();
          },
          undoAction: (
            action: IssuesRoadmapContainerActions,
            error: unknown,
          ) => {
            return IssuesFieldsActions.loadIssuesFieldsFailure({ error });
          },
        },
      ),
  );
}
