import { Injectable } from '@angular/core';
import {
  Params,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Data,
} from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

/**
 * Core router state snapshot of `BaseRouterStoreState`.
 *
 * @export
 * @interface CoreRouterStateSnapshot
 * @typedef {CoreRouterStateSnapshot}
 */
export interface CoreRouterStateSnapshot {
  url: string;
  params: Params;
  queryParams: Params;
  data?: Data;
}

@Injectable({ providedIn: 'root' })
export class CoreRouterStateSerializer
  implements RouterStateSerializer<CoreRouterStateSnapshot>
{
  /**
   * Override default serializer config.
   *
   * @public
   * @param {RouterStateSnapshot} state
   * @returns {CoreRouterStateSnapshot}
   */
  public serialize(state: RouterStateSnapshot): CoreRouterStateSnapshot {
    const { url, root }: RouterStateSnapshot = state;

    const queryParams: Params = Object.is(root.queryParams, null)
      ? Object.create(null)
      : root.queryParams;

    // Clone current root route.
    let route: ActivatedRouteSnapshot = root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    // Provide data for data serialization.
    const { data }: Data = route;

    const params = Object.is(route.params, null)
      ? Object.create(null)
      : route.params;

    return { url, params, queryParams, data };
  }
}
