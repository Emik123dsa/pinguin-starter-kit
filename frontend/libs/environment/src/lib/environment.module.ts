import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ClientEnvironmentOptions } from './interfaces';
import {
  ENVIRONMENT_PROVIDER,
  CLIENT_ENVIRONMENT_OPTIONS_PROVIDER,
} from './providers';
import { Environment } from './enums';

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
    options?: ClientEnvironmentOptions
  ): ModuleWithProviders<ClientEnvironmentModule> {
    const environment: Environment =
      options?.environment as Readonly<Environment>;

    return {
      ngModule: ClientEnvironmentModule,
      providers: [
        ENVIRONMENT_PROVIDER(environment),
        CLIENT_ENVIRONMENT_OPTIONS_PROVIDER(options),
      ],
    };
  }
}
