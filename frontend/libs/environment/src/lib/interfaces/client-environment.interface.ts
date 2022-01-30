import { Environment } from '../enums';

/**
 * Client Environment.
 *
 * @export
 * @interface ClientEnvironment
 * @typedef {ClientEnvironment}
 */
export interface ClientEnvironment {
  production: boolean;
  environment: Environment;
}

/**
 * Client Environment Options.
 *
 * @export
 * @interface ClientEnvironment
 * @typedef {ClientEnvironment}
 */
export type ClientEnvironmentOptions = ClientEnvironment;
