/* eslint-disable @typescript-eslint/no-unused-vars */
import { APP_BASE_HREF } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import {
  Actions,
  createEffect,
  CreateEffectMetadata,
  ofType,
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DataPersistence, fetch, navigation } from '@nrwl/angular';
import { IssuesService } from '@pinguin/api';
import {
  CoreEntityState,
  IssuesFieldsActions,
  RouterActions,
} from '@pinguin/core';
import { StringUtils } from '@pinguin/utils';
import { mapTo, Observable, switchMapTo } from 'rxjs';

import { RoadmapPageComponent } from '../../containers/roadmap-page';
import { RoadmapPageActions, RoadmapPageTypeActions } from '../actions';
import { RoadmapPageActionTypes } from '../constants';

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
    private readonly actions$: Actions,
    private readonly dataPersistence: DataPersistence<CoreEntityState>,
    @Optional()
    @Inject(APP_BASE_HREF)
    private readonly baseUrl: string,
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
        return RouterActions.navigateByUrl({ url: this.baseUrl });
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
