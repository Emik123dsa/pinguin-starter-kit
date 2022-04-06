import { ModuleWithProviders, NgModule } from '@angular/core';
import { ClientEnvironmentOptions } from './environment.interface';

import {
  ENVIRONMENT_PROVIDER,
  CLIENT_ENVIRONMENT_OPTIONS_PROVIDER,
} from './environment.providers';

/**
 * Client Environment Module.
 *
 * @export
 * @class RuntimeEnvironmentModule
 * @typedef {RuntimeEnvironmentModule}
 */
@NgModule({
  imports: [],
  providers: [ENVIRONMENT_PROVIDER],
  exports: [],
  schemas: [],
})
export class RuntimeEnvironmentModule {
  /**
   * Constructs an instance of RuntimeEnvironmentModule
   * with ModuleWithProviders<{@link RuntimeEnvironmentModule}>.
   *
   * @public
   * @static
   * @param {ClientEnvironment} environment
   * @returns {ModuleWithProviders<RuntimeEnvironmentModule>}
   */
  public static forRoot(
    options: ClientEnvironmentOptions,
  ): ModuleWithProviders<RuntimeEnvironmentModule> {
    return {
      ngModule: RuntimeEnvironmentModule,
      providers: [CLIENT_ENVIRONMENT_OPTIONS_PROVIDER(options)],
    };
  }
}
