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
  issuesLabelTotal$!: Observable<number>;

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
   * @param {DashboardModuleFacade} issuesLabelsFacade
   */
  public constructor(private readonly issuesModuleFacade: IssuesModuleFacade) {
    this.issuesLabelTotal$ = issuesModuleFacade.issuesLabelTotal$;
    this.issuesLabelsLoading$ = issuesModuleFacade.issuesLabelsLoading$;
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
    return this.issuesLabelsLoading$.pipe(
      skipWhile((labelsLoading: boolean) => labelsLoading),
      first(),
      tap((): void => this.issuesModuleFacade.loadIssuesLabels()),
      withLatestFrom(this.issuesLabelTotal$),
      map(([, labelTotal]: [boolean, number]) => !!labelTotal),
      catchError(() => of(false)),
    );
  }
}
