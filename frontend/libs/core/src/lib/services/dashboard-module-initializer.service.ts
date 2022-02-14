import { map, Observable } from 'rxjs';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiGatewayService } from '@pinguin/api';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class DashboardModuleInitializerService implements CanLoad {
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
    return true;
  }
}
