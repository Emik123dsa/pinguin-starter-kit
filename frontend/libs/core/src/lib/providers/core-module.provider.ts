import {
  APP_INITIALIZER,
  ExistingProvider,
  FactoryProvider,
  Provider,
  Self,
} from '@angular/core';
import { Store } from '@ngrx/store';

import { CoreState } from '../store';
import { CORE_MODULE_INITIALIZER } from '../tokens';

export const CORE_MODULE_INITIALIZER_PROVIDER: ExistingProvider = {
  provide: APP_INITIALIZER,
  useExisting: CORE_MODULE_INITIALIZER,
  multi: true,
};

/**
 * Core module initializer factory.
 * 
 * @returns {(
  store: Store<CoreState>,
) => boolean}
 */
function coreModuleInitializerFactory(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  store: Store<CoreState>,
): (store: Store<CoreState>) => boolean {
  return (): boolean => {
    // TODO: enable 'WebSocketStoreModule', maybe enable some remote services configs.
    return true;
  };
}

export const CORE_MODULE_PROVIDER: FactoryProvider = {
  provide: CORE_MODULE_INITIALIZER,
  useFactory: coreModuleInitializerFactory,
  deps: [[new Self(), Store]],
  multi: false,
};

export const CORE_MODULE_PROVIDERS: Provider[] = [
  CORE_MODULE_INITIALIZER_PROVIDER,
  CORE_MODULE_PROVIDER,
];
