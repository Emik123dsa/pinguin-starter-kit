import { RootStoreConfig } from '@ngrx/store';
import { CoreEntityState } from './models';
import { initialCoreEntityState } from './state';

export const coreEntityRootStoreConfig: RootStoreConfig<CoreEntityState> = {
  // TODO: adding support for meta reducers, logging and etc.
  metaReducers: [],
  initialState: initialCoreEntityState,
};
