import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import {
  createFeatureSelector,
  DefaultProjectorFn,
  MemoizedSelector,
} from '@ngrx/store';

import type { CoreRouterStateSnapshot } from '../serializers';

export const selectRouter: MemoizedSelector<
  object,
  RouterReducerState<CoreRouterStateSnapshot>,
  DefaultProjectorFn<RouterReducerState<CoreRouterStateSnapshot>>
> = createFeatureSelector<RouterReducerState<CoreRouterStateSnapshot>>(
  'router',
);

export const {
  selectCurrentRoute,
  selectQueryParams,
  selectQueryParam,
  selectRouteParams,
  selectRouteParam,
  selectRouteData,
  selectUrl,
} = getSelectors(selectRouter);
