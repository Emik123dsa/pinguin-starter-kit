import { Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';

import {
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
  NgModule,
  Optional as OptionalInject,
  SkipSelf,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { StringUtils } from '@pinguin/utils';

import { ClientRestApiModule } from '@pinguin/api';

import { ClientWebSocketModule } from '@pinguin/websocket';

import { CoreStoreModule } from './store';

import {
  API_GATEWAY_REQUEST_PROVIDERS,
  CORE_MODULE_PROVIDERS,
  DASHBOARD_MODULE_PROVIDERS,
} from './providers';

@NgModule({
  imports: [
    CommonModule,

    // Provide core store module.
    CoreStoreModule,

    // Provide `NxModule` for core module.
    NxModule.forRoot(),

    // HINT: we will no longer provide any environment angular variables,
    // all of these stuffs are currently implemented in the `@pinguin/environment`
    // and `@pinguin/config` packages.

    // Provide client rest api module.
    ClientRestApiModule
      .forRoot
      /**
       * HINT: if you don't want to use environment variables from runtime,
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

    // Provide client websocket module.
    // TODO: implement `EventBus` handler for any outputted WebSocket messaging.
    ClientWebSocketModule
      .forRoot
      // HINT: entirely the same like for RestAPI module.
      (),
  ],
  providers: [CORE_MODULE_PROVIDERS, DASHBOARD_MODULE_PROVIDERS],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {
  public constructor(
    @SkipSelf()
    @OptionalInject()
    private readonly internalModule?: CoreModule,
  ) {
    // We will prevent any re-initialization of core module.
    // Will be defined as a `Singleton` module in project runtime.
    if (this.internalModule) {
      const fallbackValue: string = StringUtils.format(
        'has been already initialized as a module',
        CoreModule.name,
      );

      throw new ReferenceError(fallbackValue);
    }
  }

  /**
   * Provide initialization providers inside of the `forRoot` method.
   *
   * @public
   * @static
   * @returns {ModuleWithProviders<CoreModule>}
   */
  public static forRoot(): ModuleWithProviders<CoreModule> {
    // Module initializers, will load only if the conditions from `canLoad`
    // seems to be valuable.
    return {
      ngModule: CoreModule,
      providers: [API_GATEWAY_REQUEST_PROVIDERS],
    };
  }
}
