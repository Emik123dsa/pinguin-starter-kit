import { Observable } from 'rxjs';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectIssuesLabelsIds } from '../store';

@Injectable({
  providedIn: 'root',
})
export class DashboardModuleService implements CanLoad {
  public constructor(private readonly store: Store) {}
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
    this.store.select(selectIssuesLabelsIds).subscribe((data) => {
      console.log(data);
    });

    return true;
  }
}
