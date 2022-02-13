import { Observable } from 'rxjs';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiGatewayService } from '@pinguin/api';

@Injectable({
  providedIn: 'root',
})
export class DashboardModuleInitializerService implements CanLoad {
  /**
   * Creates an instance of DashboardModuleInitializerService.
   *
   * @constructor
   * @public
   * @param {ApiGatewayService} apiGatewayService
   */
  public constructor(private readonly apiGatewayService: ApiGatewayService) {}

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
