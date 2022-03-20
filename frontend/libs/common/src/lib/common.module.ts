import {
  Self,
  NgModule,
  ModuleWithProviders,
  CUSTOM_ELEMENTS_SCHEMA,
  Optional,
  SkipSelf,
} from '@angular/core';
import { StringUtils } from '@pinguin/utils';
import { CommonModule } from '@angular/common';
import { CommonStoreModule } from './store';
import {
  WINDOW_PROVIDERS,
  WEB_WORKER_PROVIDERS,
  COMMON_MODULE_PROVIDERS,
} from './providers';

import { ClientCommonHandler } from './handlers';

@NgModule({
  imports: [CommonModule, CommonStoreModule],
  providers: [WINDOW_PROVIDERS, WEB_WORKER_PROVIDERS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientCommonModule {
  /**
   * Creates an instance of ClientCommonModule.
   *
   * @constructor
   * @public
   * @param {ClientCommonHandler} commonHandler
   */
  public constructor(
    @SkipSelf()
    @Optional()
    private readonly internalModule: ClientCommonModule,
    // Common handler is initialized as Module Run Block.
    @Self()
    private readonly commonHandler: ClientCommonHandler,
  ) {
    // We will prevent any re-initialization of core module.
    // Will be defined as a `Singleton` module in project runtime.
    if (this.internalModule) {
      const errorMessage: string = StringUtils.format(
        '{name} has been already initialized as a module',
        ClientCommonModule,
      );

      throw new ReferenceError(errorMessage);
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
      providers: [COMMON_MODULE_PROVIDERS],
    };
  }
}
