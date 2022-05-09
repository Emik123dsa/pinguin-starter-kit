import { NxModule } from '@nrwl/angular';

import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { ClientRestApiModule } from '@pinguin/api';
import { ClientGRpcWebModule } from '@pinguin/grpc-web';
import { ClientWebSocketModule } from '@pinguin/websocket';

import { CoreStoreModule } from './store';
import { CoreFacadeServiceModule } from './services/facades';
import { CoreManagerServiceModule } from './services/managers';

import {
  ERROR_REQUEST_PROVIDERS,
  API_GATEWAY_REQUEST_PROVIDERS,
  CORE_MODULE_PROVIDERS,
  DASHBOARD_MODULE_PROVIDERS,
  ISSUES_MODULE_PROVIDERS,
} from './providers';
import { EnsureModuleLoadedOnceGuard } from './guards';

@NgModule({
  imports: [
    CommonModule,

    // NOTE: Provide core store module.
    CoreStoreModule,

    // NOTE: Provide `NxModule` for core module.
    NxModule.forRoot(),

    // NOTE: we will no longer provide any environment angular variables,
    // all of these stuffs are currently implemented in the `@pinguin/environment`
    // and `@pinguin/config` packages.

    // Provide client rest api module.
    ClientRestApiModule
      .forRoot
      /**
       * NOTE: if you don't want to use environment variables from runtime,
       * which were initialized by packages before, you could override them with any other config:
       * # Example RestAPI config:
       * ```typescript
       * {
       *  baseUrl: 'http://localhost',
       *  ...options
       * }
       * ```
       *
       *  */
      (),

    // NOTE: Provide grpc-web module for communication with `CommandBus`.
    ClientGRpcWebModule.forRoot(),

    // NOTE: Provide client websocket module.
    // TODO: implement `EventBus` handler for any outputted WebSocket messaging.
    ClientWebSocketModule.forRoot(),

    // NOTE: provide facade service module for initializing module handlers.
    CoreFacadeServiceModule.forRoot(),

    // NOTE: Provide service manager module for transferring state in the universal module.
    CoreManagerServiceModule.forRoot(),
  ],
  providers: [],
  exports: [],
  schemas: [],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard<CoreModule> {
  /**
   * Ensuring that core module was loaded only once per application runtime.
   * This module explicitly should be loaded only in `AppBaseModule` or similar runtime module.
   *
   * NOTE: Will be initialized as SingletonModule in application runtime.
   *
   * @constructor
   * @public
   * @param {?CoreModule} [parentModule]
   */
  public constructor(@SkipSelf() @Optional() parentModule?: CoreModule) {
    super(parentModule);
  }

  /**
   * Provide initialization providers inside of the `forRoot` method.
   *
   * @public
   * @static
   * @returns {ModuleWithProviders<CoreModule>}
   */
  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        // NOTE: Provide internal modules, before they will be initialized,
        // modules will be loaded as Module Run Block in root for tree-shaking.
        CORE_MODULE_PROVIDERS,
        DASHBOARD_MODULE_PROVIDERS,
        ISSUES_MODULE_PROVIDERS,

        ERROR_REQUEST_PROVIDERS,
        API_GATEWAY_REQUEST_PROVIDERS,
      ],
    };
  }
}
