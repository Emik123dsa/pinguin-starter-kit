import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import {
  createFeatureSelector,
  DefaultProjectorFn,
  MemoizedSelector,
} from '@ngrx/store';
import { ROUTER_FEATURE_KEY } from '../constants';

import type { SerializedCoreRouterStateSnapshot } from '../serializers';

export const selectRouter: MemoizedSelector<
  object,
  RouterReducerState<SerializedCoreRouterStateSnapshot>,
  DefaultProjectorFn<RouterReducerState<SerializedCoreRouterStateSnapshot>>
> = createFeatureSelector<
  RouterReducerState<SerializedCoreRouterStateSnapshot>
>(ROUTER_FEATURE_KEY);

export const {
  selectCurrentRoute,
  selectQueryParams,
  selectQueryParam,
  selectRouteParams,
  selectRouteParam,
  selectRouteData,
  selectUrl,
} = getSelectors(selectRouter);
