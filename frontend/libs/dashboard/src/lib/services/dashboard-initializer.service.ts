import { Observable } from 'rxjs';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardInitializerService implements CanLoad {
  public canLoad(
    route: Route,
    segments: UrlSegment[],
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
