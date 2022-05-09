import { handleUndo } from 'ngrx-undo';
import { RootStoreConfig } from '@ngrx/store';
import { CoreState } from './models';
import { initialCoreState } from './state';

export const coreEntityRootConfig: RootStoreConfig<CoreState> = {
  // TODO: adding support for meta reducers, logging and etc.
  metaReducers: [handleUndo],
  initialState: initialCoreState,
  runtimeChecks: {
    strictActionImmutability: false,
    strictActionSerializability: false,
    strictActionTypeUniqueness: true,
    strictActionWithinNgZone: true,
    strictStateImmutability: false,
    strictStateSerializability: false,
  },
};
