/* eslint-disable @typescript-eslint/no-unused-vars */

import { Observable } from 'rxjs';
import { APP_BASE_HREF } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Actions, createEffect, CreateEffectMetadata } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DataPersistence } from '@nrwl/angular';
import {
  CoreEntityState,
  IssuesFieldsActions,
  RouterActions,
} from '@pinguin/core';

/** @internal actions and containers. */
import { IssuesRoadmapActions } from '../actions';
import { IssuesRoadmapContainerComponent } from '../../containers/issues-roadmap-container';

@Injectable({
  providedIn: 'platform',
})
export class IssuesRoadmapEffects {
  /**
   * Creates an instance of DashboardLayoutEffects.
   *
   * @constructor
   * @public
   * @param {Actions} actions$
   * @param {IssuesService} issuesService
   */
  public constructor(
    @Optional()
    @Inject(APP_BASE_HREF)
    private readonly redirectUri: string,
    private readonly actions$: Actions,
    private readonly dataPersistence: DataPersistence<CoreEntityState>,
  ) {
    // Whether `DashboardLayoutEffects` was initialized successfully.
  }

  /**
   * initIssuesRoadmap$ stream for initializing issues roadmap.
   *
   * @type {(Observable<Action> & CreateEffectMetadata)}
   */
  pageInit$: Observable<Action> & CreateEffectMetadata = createEffect(() =>
    this.dataPersistence.navigation(IssuesRoadmapContainerComponent, {
      run: (route: ActivatedRouteSnapshot) => {
        return IssuesRoadmapActions.initIssuesRoadmap();
      },
      onError: (route: ActivatedRouteSnapshot, error: unknown) => {
        return RouterActions.navigateByUrl({ url: this.redirectUri });
      },
    }),
  );

  initIssuesRoadmap$: Observable<Action> & CreateEffectMetadata = createEffect(
    () =>
      this.dataPersistence.optimisticUpdate(
        IssuesRoadmapActions.initIssuesRoadmap,
        {
          run: (action: IssuesRoadmapActions) => {
            return IssuesFieldsActions.loadAllIssuesFields();
          },
          undoAction: (action: IssuesRoadmapActions, error: unknown) => {
            return IssuesFieldsActions.loadAllIssuesFieldsFailure({ error });
          },
        },
      ),
  );
}
