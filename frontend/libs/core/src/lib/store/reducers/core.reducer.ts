import { ActionReducerMap } from '@ngrx/store';

import { CoreEntityState } from '../models';
import { CoreEntityActions } from '../actions';
import { initialCoreEntityState } from '../state';

const coreReducer: ActionReducerMap<CoreEntityState, CoreEntityActions> =
  initialCoreEntityState;

export function getCoreReducer(): ActionReducerMap<
  CoreEntityState,
  CoreEntityActions
> {
  return coreReducer;
}
