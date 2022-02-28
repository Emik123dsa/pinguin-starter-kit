import { HttpContextToken } from '@angular/common/http';
import { FactoryProvider } from '@angular/core';

import { PlainObjectLiteral } from '@pinguin/utils';

import { ClientRestApiConfigRef } from '../classes';
import { CLIENT_REST_API_OPTIONS } from '../tokens';
import { ClientRestApiOptions } from '../interfaces';

/**
 * Client rest api options factory.
 *
 * @param {ClientRestApiOptions} options
 * @returns {*}
 */
function clientRestApiDefaultOptionsFactory(
  options: ClientRestApiOptions,
): ClientRestApiOptions {
  return {
    serializer(data: PlainObjectLiteral): Optional<string> {
      return JSON.stringify(data);
    },
    ...options,
  };
}

/**
 * Client rest api config for `ClientApiModule`.
 *
 * @export
 * @class ClientRestApiConfig
 * @typedef {ClientRestApiConfig}
 * @extends {ClientRestApiConfigRef}
 */
export class ClientRestApiConfig extends ClientRestApiConfigRef {
  public override getHeaderMap(): Map<string, string> {
    return this.options.headerMap;
  }

  public override getQueryParamMap(): Map<string, string> {
    return this.options.queryParamMap;
  }

  // Set default attempts for API requests,
  // otherwise they could be override in the service context.
  public override getRetryAttempts(): HttpContextToken<number> {
    return new HttpContextToken(() => this.options.retryAttempts as number);
  }

  public override getErrorAttempts(): HttpContextToken<number> {
    return new HttpContextToken(() => this.options.errorAttempts as number);
  }

  /**
   * Override default serialization for request body.
   *
   * # Example factory for serialization:
   *
   * ```typescript
   *  function factory(
   *    options: ClientRestApiOptions,
   *  ): ClientRestApiOptions {
   *  return {
   *    serializer(data: PlainObjectLiteral): Optional<string> {
   *      return JSON.stringify(data);
   *    },
   *     ...options,
   *   };
   * }
   * ```
   * @public
   * @override
   * @returns {(data: any) => any}
   */
  public override getSerializer() {
    return this.options.serializer as (
      data: PlainObjectLiteral,
    ) => Optional<string>;
  }
}

function clientRestApiConfigProviderFactory(
  options: ClientRestApiOptions,
): ClientRestApiConfigRef {
  const restApiOptions: ClientRestApiOptions =
    clientRestApiDefaultOptionsFactory(options);
  return new ClientRestApiConfig(restApiOptions);
}

// FactoryProvider for client rest api config.
export const CLIENT_REST_API_CONFIG_PROVIDER: FactoryProvider = {
  provide: ClientRestApiConfigRef,
  useFactory: clientRestApiConfigProviderFactory,
  deps: [CLIENT_REST_API_OPTIONS],
  multi: false,
};
