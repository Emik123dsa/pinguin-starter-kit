import {
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
  NgModule,
  Optional as OptionalInject,
  SkipSelf,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import { ClientRestApiModule } from '@pinguin/api';

import { CoreStoreModule, CoreEntityState } from './store';
import {
  API_GATEWAY_REQUEST_PROVIDERS,
  CORE_MODULE_INITIALIZER_PROVIDER,
  DASHBOARD_MODULE_INITIALIZER_PROVIDER,
} from './providers';
import { CORE_MODULE_INITIALIZER } from './tokens';

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

@NgModule({
  imports: [CommonModule, ClientRestApiModule.forRoot(), CoreStoreModule],
  providers: [
    API_GATEWAY_REQUEST_PROVIDERS,
    CORE_MODULE_INITIALIZER_PROVIDER,
    DASHBOARD_MODULE_INITIALIZER_PROVIDER,
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {
  public constructor(
    @SkipSelf()
    @OptionalInject()
    private readonly internalModule?: CoreModule,
  ) {}

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
      providers: [
        {
          provide: CORE_MODULE_INITIALIZER,
          useFactory: coreModuleInitializerFactory,
          deps: [Store],
          multi: false,
        },
      ],
    };
  }
}
