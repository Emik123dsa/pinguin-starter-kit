import {
  APP_INITIALIZER,
  ClassProvider,
  ExistingProvider,
  FactoryProvider,
  forwardRef,
  LOCALE_ID,
  Provider,
} from '@angular/core';
import { ClientCommonHandler } from '../handlers';
import { COMMON_MODULE_INITIALIZER } from '../tokens';

export const COMMON_CLIENT_HANDLER_PROVIDER: ClassProvider = {
  provide: ClientCommonHandler,
  useClass: forwardRef(() => ClientCommonHandler),
  multi: false,
};

export const COMMON_MODULE_INITIALIZER_PROVIDER: ExistingProvider = {
  provide: APP_INITIALIZER,
  useExisting: COMMON_MODULE_INITIALIZER,
  multi: true,
};

/**
   * Core module initializer factory.
   * 
   * @returns {(
    store: Store<CoreEntityState>,
  ) => boolean}
   */
function commonModuleInitializerFactory(): (
  clientCommonHandler: ClientCommonHandler,
) => boolean {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (clientCommonHandler: ClientCommonHandler): boolean => {
    // clientCommonHandler.init();
    console.log(clientCommonHandler);
    return true;
  };
}

export const COMMON_MODULE_PROVIDER: FactoryProvider = {
  provide: COMMON_MODULE_INITIALIZER,
  useFactory: commonModuleInitializerFactory,
  deps: [LOCALE_ID],
  multi: false,
};

export const COMMON_MODULE_PROVIDERS: Provider[] = [
  COMMON_CLIENT_HANDLER_PROVIDER,
  COMMON_MODULE_INITIALIZER_PROVIDER,
  COMMON_MODULE_PROVIDER,
];
