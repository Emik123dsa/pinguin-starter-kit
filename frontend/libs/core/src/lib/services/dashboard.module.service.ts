/* eslint-disable @typescript-eslint/no-unused-vars */
import { Observable } from 'rxjs';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform',
})
export class DashboardModuleService implements CanLoad {
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
    // Complete some runtime logic here, before dashboard will be initialized
    // TODO: implement any `overview` checking out logic here.
    return true;
  }
}
