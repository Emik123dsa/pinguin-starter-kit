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
  selectIssuesLabelsLoading,
  selectCurrentIssueLabel,
  CoreEntityState,
} from '../store';
import { IssuesLabelsEntityActions } from '../store/actions';
import { IssuesLabelsActionTypes } from '../store/constants';
import { TypedAction } from '@ngrx/store/src/models';
import { DashboardModuleFacade } from '../facades';

@Injectable({
  providedIn: 'root',
})
export class DashboardModuleService implements CanLoad {
  /**
   * Issue label total amount.
   *
   * @type {!Observable<number>}
   */
  issueLabelTotal$!: Observable<number>;

  /**
   * Issues labels loading state.
   *
   * @type {!Observable<boolean>}
   */
  issuesLabelsLoading$!: Observable<boolean>;

  /**
   * Creates an instance of DashboardModuleService.
   *
   * @constructor
   * @public
   * @param {DashboardModuleFacade} facade
   */
  public constructor(private readonly facade: DashboardModuleFacade) {
    this.issueLabelTotal$ = this.facade.issueLabelTotal$;
    this.issuesLabelsLoading$ = this.facade.issuesLabelsLoading$;
  }

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
    return this.issuesLabelsLoading$.pipe(
      tap((): void => this.facade.loadAllIssuesLabels()),
      skipWhile((loading: boolean) => loading),
      first(),
      withLatestFrom(this.issueLabelTotal$),
      map(([, issueLabelTotal]: [boolean, number]) => !!issueLabelTotal),
      catchError(() => of(false)),
    );
  }
}
