import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ClientEnvironmentOptions } from './environment.interfaces';

import {
  ENVIRONMENT_PROVIDER,
  CLIENT_ENVIRONMENT_OPTIONS_PROVIDER,
} from './environment.providers';

/**
 * Client Environment Module.
 *
 * @export
 * @class ClientEnvironmentModule
 * @typedef {ClientEnvironmentModule}
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ClientEnvironmentModule {
  /**
   * Constructs an instance of ClientEnvironmentModule
   * with ModuleWithProviders<{@link ClientEnvironmentModule}>.
   *
   * @public
   * @static
   * @param {ClientEnvironment} environment
   * @returns {ModuleWithProviders<ClientEnvironmentModule>}
   */
  public static forRoot(
    options: ClientEnvironmentOptions
  ): ModuleWithProviders<ClientEnvironmentModule> {
    return {
      ngModule: ClientEnvironmentModule,
      providers: [
        ENVIRONMENT_PROVIDER(options.environment),
        CLIENT_ENVIRONMENT_OPTIONS_PROVIDER(options),
      ],
    };
  }
}
