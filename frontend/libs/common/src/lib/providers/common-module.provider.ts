import { Platform } from '@angular/cdk/platform';
import { isPlatformBrowser } from '@angular/common';
import {
  APP_INITIALIZER,
  ClassProvider,
  ExistingProvider,
  FactoryProvider,
  forwardRef,
  PLATFORM_ID,
  Provider,
  Self,
} from '@angular/core';
import { ClientCommonHandler } from '../handlers';
import { COMMON_MODULE_INITIALIZER } from '../tokens';

export const COMMON_MODULE_INITIALIZER_PROVIDER: ExistingProvider = {
  provide: APP_INITIALIZER,
  useExisting: forwardRef(() => COMMON_MODULE_INITIALIZER),
  multi: true,
};

/**
   * Core module initializer factory.
   * 
   * @returns {(
    store: Store<CoreState>,
  ) => boolean}
   */
function commonModuleInitializerFactory(
  commonHandler: ClientCommonHandler,
  platform: Platform,
): (commonHandler: ClientCommonHandler, platformId: object) => void | boolean {
  return (): void | boolean => platform.isBrowser && <void>commonHandler.init();
}

export const COMMON_MODULE_PROVIDER: FactoryProvider = {
  provide: COMMON_MODULE_INITIALIZER,
  useFactory: commonModuleInitializerFactory,
  deps: [[new Self(), ClientCommonHandler], Platform],
  multi: false,
};

export const COMMON_MODULE_PROVIDERS: Provider[] = [
  COMMON_MODULE_INITIALIZER_PROVIDER,
  COMMON_MODULE_PROVIDER,
];
