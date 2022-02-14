import { routerReducer } from '@ngrx/router-store';

type RouterReducerState = typeof routerReducer;

export interface CoreEntity {
  router: RouterReducerState;
}

export type CoreEntityState = CoreEntity;
