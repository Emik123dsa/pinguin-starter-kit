/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  first,
  map,
  catchError,
  Observable,
  of,
  skipWhile,
  tap,
  withLatestFrom,
} from 'rxjs';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';

import { IssuesModuleFacade } from '../services/facades';

@Injectable({
  providedIn: 'root',
})
export class IssuesModuleHandler implements CanLoad {
  /**
   * Issue label total amount.
   *
   * @type {!Observable<number>}
   */
  labelTotal$!: Observable<number>;

  /**
   * Issues labels loading state.
   *
   * @type {!Observable<boolean>}
   */
  labelsLoading$!: Observable<boolean>;

  /**
   * Creates an instance of DashboardModuleService.
   *
   * @constructor
   * @public
   * @param {DashboardModuleFacade} issuesFacade
   */
  public constructor(readonly issuesFacade: IssuesModuleFacade) {
    this.labelTotal$ = issuesFacade.labelTotal$;
    this.labelsLoading$ = issuesFacade.labelsLoading$;
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
    segments: Array<UrlSegment>,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.labelsLoading$.pipe(
      skipWhile((labelsLoading: boolean) => labelsLoading),
      first(),
      tap((): void => this.issuesFacade.loadAllLabels()),
      withLatestFrom(this.labelTotal$),
      map(([, labelTotal]: [boolean, number]) => !!labelTotal),
      catchError(() => of(false)),
    );
  }
}
