/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { HttpContextToken } from '@angular/common/http';
import { FactoryProvider, Self } from '@angular/core';

import { ObjectLiteral } from '@pinguin/utils';

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
    serializer(
      data: ObjectLiteral,
      replacer?: Closure,
      space?: string | number,
    ): Optional<string> {
      return JSON.stringify(data, replacer, space);
    },
    deserializer(data: string, reviver?: Closure): Optional<ObjectLiteral> {
      return JSON.parse(data, reviver);
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

  // Override default `shareReplay` config, will be used for buffering API requests.
  public override getRefCount(): boolean {
    return this.options.refCount as boolean;
  }

  public override getBufferSize(): number {
    return this.options.bufferSize as number;
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
   *    serializer(data: ObjectLiteral): Optional<string> {
   *      return JSON.stringify(data);
   *    },
   *     ...options,
   *   };
   * }
   * ```
   * @public
   * @override
   * @returns @returns {(
      data: ObjectLiteral,
    ) => Optional<string>}
   */
  public override getSerializer(): (
    data: ObjectLiteral,
    replacer?: Closure,
    space?: string | number,
  ) => Optional<string> {
    return this.options.serializer!;
  }

  /**
   * Override default de-serialization for response body.
   *
   * # Example factory for serialization:
   *
   * ```typescript
   *  function factory(
   *    options: ClientRestApiOptions,
   *  ): ClientRestApiOptions {
   *  return {
   *    deserializer(data: string): Optional<ObjectLiteral> {
   *      return JSON.parse(data);
   *    },
   *     ...options,
   *   };
   * }
   * ```
   * @public
   * @override
   * @returns {(
      data: string,
    ) => Optional<ObjectLiteral>}
   */
  public override getDeserializer(): (
    data: string,
    reviver?: Closure,
  ) => Optional<ObjectLiteral> {
    return this.options.deserializer!;
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
  deps: [[new Self(), CLIENT_REST_API_OPTIONS]],
  multi: false,
};
