import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

import { CoreEntityState } from './models';
import { CoreEntityActions } from './actions';
import { coreEntityRootReducerFactory } from './reducers';

export const CORE_ENTITY_ROOT_REDUCER: InjectionToken<
  ActionReducerMap<CoreEntityState, CoreEntityActions>
> = new InjectionToken<ActionReducerMap<CoreEntityState, CoreEntityActions>>(
  'CORE_ENTITY_ROOT_REDUCER',
  {
    providedIn: 'root',
    factory: coreEntityRootReducerFactory,
  },
);
