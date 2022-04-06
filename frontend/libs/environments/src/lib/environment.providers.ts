import { FactoryProvider, Inject, Self, ValueProvider } from '@angular/core';
import { ClientEnvironmentOptions } from './environment.interface';
import { ClientEnvironment } from './environment.enum';
import { ENVIRONMENT, CLIENT_ENVIRONMENT_OPTIONS } from './environment.tokens';

export function clientEnvironmentProviderFactory({
  environment,
}: ClientEnvironmentOptions): ClientEnvironment {
  return environment;
}

/**
 * Environment Provider.
 *
 * @param {ClientEnvironment} environment
 * @returns {FactoryProvider}
 */
export const ENVIRONMENT_PROVIDER: FactoryProvider = {
  provide: ENVIRONMENT,
  useFactory: clientEnvironmentProviderFactory,
  deps: [[new Self(), new Inject(CLIENT_ENVIRONMENT_OPTIONS)]],
  multi: false,
};

/**
 * Client Environment Options Provider.
 *
 * @param {ClientEnvironment} environment
 * @returns {FactoryProvider}
 */
export const CLIENT_ENVIRONMENT_OPTIONS_PROVIDER: (
  options?: ClientEnvironmentOptions,
) => ValueProvider = (options?: ClientEnvironmentOptions): ValueProvider => ({
  provide: CLIENT_ENVIRONMENT_OPTIONS,
  useValue: options,
  multi: false,
});
