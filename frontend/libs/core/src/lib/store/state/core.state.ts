import { routerReducer } from '@ngrx/router-store';
import { CoreEntityState } from '../models';

export const initialCoreEntityState: CoreEntityState = {
  router: routerReducer,
};
