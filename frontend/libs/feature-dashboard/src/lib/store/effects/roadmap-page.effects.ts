/* eslint-disable @typescript-eslint/no-unused-vars */
import { APP_BASE_HREF } from '@angular/common';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Actions, createEffect, CreateEffectMetadata } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DataPersistence } from '@nrwl/angular';
import {
  CoreEntityState,
  IssuesFieldsActions,
  RouterActions,
} from '@pinguin/core';

import { Observable } from 'rxjs';

import { RoadmapPageActions } from '../actions';
import { RoadmapPageComponent } from '../../containers/roadmap-page/roadmap-page.component';

@Injectable({
  providedIn: 'root',
})
export class RoadmapPageEffects {
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
    this.dataPersistence.navigation(RoadmapPageComponent, {
      run: (route: ActivatedRouteSnapshot) => {
        return RoadmapPageActions.initIssuesRoadmap();
      },
      onError: (route: ActivatedRouteSnapshot, error: unknown) => {
        return RouterActions.navigateByUrl({ url: this.redirectUri });
      },
    }),
  );

  initIssuesRoadmap$: Observable<Action> & CreateEffectMetadata = createEffect(
    () =>
      this.dataPersistence.optimisticUpdate(
        RoadmapPageActions.initIssuesRoadmap,
        {
          run: (action: RoadmapPageActions) => {
            return IssuesFieldsActions.loadAllIssuesFields();
          },
          undoAction: (action: RoadmapPageActions, error: unknown) => {
            return IssuesFieldsActions.loadAllIssuesFieldsFailure({ error });
          },
        },
      ),
  );
}
