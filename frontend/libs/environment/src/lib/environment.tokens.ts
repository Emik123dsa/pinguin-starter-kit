import { InjectionToken } from '@angular/core';
import {
  ENVIRONMENT_CONSTANT,
  ENVIRONMENT_OPTIONS_CONSTANT,
} from './environment.constants';
import { ClientEnvironment } from './environment.enum';
import { ClientEnvironmentOptions } from './environment.interface';

/**
 * Client Environment Options Token.
 * Using with `@SkipSelf` decorator whether environment is enabled.
 *
 * @type {InjectionToken<ClientEnvironmentOptions>}
 */
export const CLIENT_ENVIRONMENT_OPTIONS: InjectionToken<ClientEnvironmentOptions> =
  new InjectionToken(ENVIRONMENT_OPTIONS_CONSTANT, {
    providedIn: 'root',
    factory: (): ClientEnvironmentOptions =>
      ({
        environment: ClientEnvironment.Staging,
      } as ClientEnvironmentOptions),
  });

/**
 * Client Environment Token.
 * Using with `@SkipSelf` decorator whether environment is enabled.
 *
 * @type {InjectionToken<ClientEnvironment>}
 */
export const ENVIRONMENT: InjectionToken<ClientEnvironment> =
  new InjectionToken(ENVIRONMENT_CONSTANT, {
    providedIn: 'platform',
    factory: (): ClientEnvironment => {
      return ClientEnvironment.Staging;
    },
  });
