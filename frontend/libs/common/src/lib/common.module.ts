import {
  NgModule,
  ModuleWithProviders,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  WINDOW_PROVIDERS,
  WEB_WORKER_PROVIDERS,
  COMMON_MODULE_PROVIDERS,
} from './providers';
import { CommonStoreModule } from './store';
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
    // HINT: Common handler is initialized as Module Run Block.
    public readonly commonHandler: ClientCommonHandler,
  ) {}

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
