/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  first,
  map,
  mapTo,
  catchError,
  Observable,
  of,
  skipWhile,
  tap,
  withLatestFrom,
} from 'rxjs';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  selectIssueLabelTotal,
  selectIsIssuesLabelsLoading,
  selectCurrentIssueLabel,
  CoreEntityState,
} from '../store';
import { IssuesLabelsEntityActions } from '../store/actions';
import { IssuesLabelsActionTypes } from '../store/constants';
import { TypedAction } from '@ngrx/store/src/models';

@Injectable({
  providedIn: 'root',
})
export class DashboardModuleService implements CanLoad {
  public constructor(private readonly store: Store<CoreEntityState>) {}
  /**
   * Check out whether `note-labels` are being available,
   * before lazy module will be mounted.
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
    return this.store.select(selectIsIssuesLabelsLoading).pipe(
      tap((): void => {
        const action: TypedAction<IssuesLabelsActionTypes> =
          IssuesLabelsEntityActions.loadIssuesLabelsAll();
        return this.store.dispatch(action);
      }),
      skipWhile((loading: boolean) => loading),
      first(),
      withLatestFrom(this.store.select(selectIssueLabelTotal)),
      map(([, issueLabelTotal]: [boolean, number]) => !!issueLabelTotal),
      catchError(() => of(false)),
    );
  }
}
