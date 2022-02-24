import {
  APP_INITIALIZER,
  ExistingProvider,
  FactoryProvider,
  forwardRef,
  Provider,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreEntityState } from '..';
import { CORE_MODULE_INITIALIZER } from '../tokens';

export const CORE_MODULE_INITIALIZER_PROVIDER: ExistingProvider = {
  provide: APP_INITIALIZER,
  useExisting: forwardRef(() => CORE_MODULE_INITIALIZER),
  multi: true,
};

/**
 * Core module initializer factory.
 * 
 * @returns {(
  store: Store<CoreEntityState>,
) => boolean}
 */
function coreModuleInitializerFactory(): (
  store: Store<CoreEntityState>,
) => boolean {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (store?: Store<CoreEntityState>): boolean => {
    // TODO: enable 'WebSocketStoreModule', maybe enable some remote services configs.

    return true;
  };
}

export const CORE_MODULE_PROVIDER: FactoryProvider = {
  provide: CORE_MODULE_INITIALIZER,
  useFactory: coreModuleInitializerFactory,
  deps: [Store],
  multi: false,
};

export const CORE_MODULE_PROVIDERS: Provider[] = [
  CORE_MODULE_INITIALIZER_PROVIDER,
  CORE_MODULE_PROVIDER,
];
