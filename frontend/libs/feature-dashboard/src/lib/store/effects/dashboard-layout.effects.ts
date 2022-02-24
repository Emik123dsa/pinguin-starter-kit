import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Actions, createEffect, CreateEffectMetadata } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DataPersistence, navigation } from '@nrwl/angular';
import { IssuesService } from '@pinguin/api';
import { CoreEntityState } from '@pinguin/core';
import { Observable, of } from 'rxjs';

import { DashboardLayoutComponent } from '../../containers/dashboard-layout';

@Injectable({
  providedIn: 'root',
})
export class DashboardLayoutEffects {
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
    private readonly issuesService: IssuesService,
    private readonly dataPersistence: DataPersistence<CoreEntityState>,
  ) {
    // Whether `DashboardLayoutEffects` was initialized successfully.
  }

  /**
   * loadAllIssuesFields$ stream for loading labels fields.
   *
   * @type {(Observable<Action> & CreateEffectMetadata)}
   */
  loadAllIssuesFields$: Observable<any> & CreateEffectMetadata = createEffect(
    () =>
      this.dataPersistence.navigation(DashboardLayoutComponent, {
        run: (activatedRouteSnapshot: ActivatedRouteSnapshot) => {
          // return this.issuesService;

          return { type: 'Hello,User' };
        },
        onError: (
          activatedRouteSnapshot: ActivatedRouteSnapshot,
          error: unknown,
        ) => {
          return null;
        },
      }),
  );
}
