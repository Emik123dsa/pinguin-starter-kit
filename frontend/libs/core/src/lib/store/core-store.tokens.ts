import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

import { CoreState } from './models';
import { CoreEntityActions } from './actions';
import { coreEntityRootReducerFactory } from './reducers';

export const CORE_ENTITY_ROOT_REDUCER: InjectionToken<
  ActionReducerMap<CoreState, CoreEntityActions>
> = new InjectionToken<ActionReducerMap<CoreState, CoreEntityActions>>(
  'CORE_ENTITY_ROOT_REDUCER',
  {
    providedIn: 'root',
    factory: coreEntityRootReducerFactory,
  },
);
