import { first, mapTo, Observable, of, tap, withLatestFrom } from 'rxjs';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  selectIssuesLabelsTotal,
  selectIssuesLabelsEntities,
  CoreEntityState,
} from '../store';
import { IssuesLabelsEntityActions } from '../store/actions';

@Injectable({
  providedIn: 'root',
})
export class DashboardModuleService implements CanLoad {
  public constructor(private readonly store: Store<CoreEntityState>) {}
  /**
   * Check out whether `note-labels` are being available,
   * before application will be mounted.
   *
   * @public
   * @param {Route} route
   * @param {UrlSegment[]} segments
   * @returns {(Observable<boolean> | Promise<boolean> | boolean)}
   */
  public canLoad(
    route: Route,
    segments: UrlSegment[],
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select(selectIssuesLabelsTotal).pipe(
      tap(() =>
        this.store.dispatch(IssuesLabelsEntityActions.loadIssuesLabelsAll()),
      ),

      withLatestFrom(this.store.select(selectIssuesLabelsEntities)),

      tap((data) => {
        console.log(data);
      }),
      first(),
      mapTo(true),
    );
  }
}
