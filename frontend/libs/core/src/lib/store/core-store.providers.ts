import { handleUndo } from 'ngrx-undo';
import { RootStoreConfig } from '@ngrx/store';
import { CoreEntityState } from './models';
import { initialCoreEntityState } from './state';

export const coreEntityRootConfig: RootStoreConfig<CoreEntityState> = {
  // TODO: adding support for meta reducers, logging and etc.
  metaReducers: [handleUndo],
  initialState: initialCoreEntityState,
  runtimeChecks: {
    strictActionImmutability: false,
    strictActionSerializability: false,
    strictActionTypeUniqueness: true,
    strictActionWithinNgZone: true,
    strictStateImmutability: false,
    strictStateSerializability: false,
  },
};
