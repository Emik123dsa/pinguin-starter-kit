/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Type } from '@angular/core';
import {
  Params,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Data,
  ParamMap,
} from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

/**
 * Core router state snapshot of `BaseRouterStoreState`.
 *
 * @export
 * @interface CoreRouterStateSnapshot
 * @typedef {CoreRouterStateSnapshot}
 */
export interface SerializedCoreRouterStateSnapshot {
  root?: any; //ActivatedRouteSnapshot;
  url: string;
  routeConfig?: any;
  params: Params;
  queryParams: Params;
  data?: Data;
}

@Injectable({
  providedIn: 'root',
})
export class CoreRouterStateSerializer extends RouterStateSerializer<SerializedCoreRouterStateSnapshot> {
  /**
   * Override default serializer config.
   *
   * @public
   * @param {RouterStateSnapshot} state
   * @returns {CoreRouterStateSnapshot}
   */
  public override serialize(
    routerState: RouterStateSnapshot,
  ): SerializedCoreRouterStateSnapshot {
    const { url, root }: RouterStateSnapshot = routerState;

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

    return {
      root: this.serializeRootRoute(root),
      url,
      data,
      params,
      queryParams,
    };
  }

  /**
   * Based on route default state serializer.
   *
   * @see https://github.com/ngrx/platform/blob/master/modules/router-store/src/serializers/default_serializer.ts
   * @private
   * @param {ActivatedRouteSnapshot} route
   * @returns {ActivatedRouteSnapshot}
   */
  private serializeRootRoute(
    route: ActivatedRouteSnapshot,
  ): ActivatedRouteSnapshot {
    const children = route.children.map((childRoute: ActivatedRouteSnapshot) =>
      this.serializeRootRoute(childRoute),
    );

    return {
      params: route.params,
      paramMap: route.paramMap,
      data: route.data,
      url: route.url,
      outlet: route.outlet,
      routeConfig: route.routeConfig
        ? {
            component: route.routeConfig.component,
            path: route.routeConfig.path,
            pathMatch: route.routeConfig.pathMatch,
            redirectTo: route.routeConfig.redirectTo,
            outlet: route.routeConfig.outlet,
          }
        : null,
      queryParams: route.queryParams,
      queryParamMap: route.queryParamMap,
      fragment: route.fragment,
      component: (route.routeConfig
        ? route.routeConfig.component
        : undefined) as string | Type<any> | null,
      root: undefined as any,
      parent: undefined as any,
      firstChild: children[0],
      pathFromRoot: undefined as any,
      children,
    };
  }
}
