import {
  Self,
  NgModule,
  ModuleWithProviders,
  CUSTOM_ELEMENTS_SCHEMA,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { StringUtils } from '@pinguin/utils';

import { CommonStoreModule } from './store';
import {
  WINDOW_PROVIDERS,
  WEB_WORKER_PROVIDERS,
  COMMON_MODULE_PROVIDERS,
} from './providers';

import { ClientCommonHandler } from './handlers';

@NgModule({
  imports: [CommonModule, CommonStoreModule],
  providers: [],
  declarations: [],
  exports: [CommonModule, CommonStoreModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientCommonModule {
  /**
   * Creates an instance of ClientCommonModule.
   *
   * @constructor
   * @public
   * @param {ClientCommonHandler} clientCommonHandler
   */
  public constructor(
    // Common handler is initialized as Module Run Block.
    @Self()
    private readonly clientCommonHandler: ClientCommonHandler,
    @SkipSelf()
    @Optional()
    private readonly internalModule: ClientCommonModule,
  ) {
    // We will prevent any re-initialization of core module.
    // Will be defined as a `Singleton` module in project runtime.
    if (this.internalModule) {
      const errorValue: string = StringUtils.format(
        '{name} has been already initialized as a module',
        ClientCommonModule,
      );

      throw new ReferenceError(errorValue);
    }
  }

  /**
   * Initialize providers instance of `CommonModule`.
   *
   * @public
   * @static
   * @returns {ModuleWithProviders<ClientCommonModule>}
   */
  public static forRoot(): ModuleWithProviders<ClientCommonModule> {
    return {
      ngModule: ClientCommonModule,
      providers: [
        WINDOW_PROVIDERS,
        WEB_WORKER_PROVIDERS,
        COMMON_MODULE_PROVIDERS,
      ],
    };
  }
}
