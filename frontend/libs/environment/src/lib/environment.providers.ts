import { FactoryProvider, ValueProvider } from '@angular/core';
import { ClientEnvironmentOptions } from './environment.interface';
import { ClientEnvironment } from './environment.enum';
import { ENVIRONMENT, CLIENT_ENVIRONMENT_OPTIONS } from './environment.tokens';

/**
 * Environment Provider.
 *
 * @param {ClientEnvironment} environment
 * @returns {FactoryProvider}
 */
export const ENVIRONMENT_PROVIDER: (
  environment: ClientEnvironment
) => FactoryProvider = (
  environment: Readonly<ClientEnvironment>
): FactoryProvider => ({
  provide: ENVIRONMENT,
  useFactory: () => environment,
  deps: [],
  multi: false,
});

/**
 * Client Environment Options Provider.
 *
 * @param {ClientEnvironment} environment
 * @returns {FactoryProvider}
 */
export const CLIENT_ENVIRONMENT_OPTIONS_PROVIDER: (
  options?: ClientEnvironmentOptions
) => ValueProvider = (options?: ClientEnvironmentOptions): ValueProvider => ({
  provide: CLIENT_ENVIRONMENT_OPTIONS,
  useValue: options,
  multi: false,
});
