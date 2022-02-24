import { RootStoreConfig } from '@ngrx/store';
import { CoreEntityState } from './models';
import { initialCoreEntityState } from './state';

export const coreEntityRootConfig: RootStoreConfig<CoreEntityState> = {
  // TODO: adding support for meta reducers, logging and etc.
  metaReducers: [],
  initialState: initialCoreEntityState,

  // TODO: implement runtime checks validations.
  // # Example config:
  // strictActionImmutability: false,
  //   strictActionSerializability: false,
  //   strictActionTypeUniqueness: true, // dev only
  //   strictActionWithinNgZone: true, // dev only
  //   strictStateImmutability: true, // dev only
  //   strictStateSerializability: false,
  runtimeChecks: {},
};
