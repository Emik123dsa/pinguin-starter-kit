import { ClientEnvironment } from './environment.enum';

/**
 * Client Environment.
 *
 * @export
 * @interface ClientEnvironment
 * @typedef {ClientEnvironment}
 */
export interface ClientEnvironmentOptions {
  production: boolean;
  environment: ClientEnvironment;
}
