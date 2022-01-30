import { Environment } from '../enums';
import { InjectionToken } from '@angular/core';

import {
  ENVIRONMENT_CONSTANT,
  ENVIRONMENT_OPTIONS_CONSTANT,
} from '../constants';

import { ClientEnvironment, ClientEnvironmentOptions } from '../interfaces';

/**
 * Client Environment Options Token.
 *
 * @type {InjectionToken<ClientEnvironmentOptions>}
 */
export const CLIENT_ENVIRONMENT_OPTIONS: InjectionToken<ClientEnvironmentOptions> =
  new InjectionToken(ENVIRONMENT_OPTIONS_CONSTANT, {
    providedIn: 'root',
    factory: (): ClientEnvironmentOptions =>
      ({
        production: false,
        environment: Environment.Default,
      } as ClientEnvironment),
  });

/**
 * Client Environment Token.
 *
 * @type {InjectionToken<ClientEnvironment>}
 */
export const ENVIRONMENT: InjectionToken<Environment> = new InjectionToken(
  ENVIRONMENT_CONSTANT,
  {
    providedIn: 'platform',
    factory: (): Environment => {
      return Environment.Default;
    },
  }
);
