/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlainObjectLiteral } from '@pinguin/utils';
import { HttpContextToken } from '@angular/common/http';
import { AbstractConnectionConfig } from '@pinguin/common';

import type { ClientRestApiOptions } from '../interfaces';

/**
 * Client rest api config ref.
 */
export abstract class ClientRestApiConfigRef extends AbstractConnectionConfig<ClientRestApiOptions> {
  public abstract getHeaderMap(): Map<string, string>;
  public abstract getQueryParamMap(): Map<string, string>;

  // Set default attempts for API requests,
  // otherwise they could be override in the service context.
  public abstract getRetryAttempts(): HttpContextToken<number>;
  public abstract getErrorAttempts(): HttpContextToken<number>;

  // Override default `shareReplay` config, will be used for buffering API requests.
  public abstract getRefCount(): boolean;
  public abstract getBufferSize(): number;

  // Set default serializer for writing request body.
  public abstract getSerializer(): (
    data: PlainObjectLiteral,
    replacer?: (...args: any[]) => void,
    space?: string | number,
  ) => Optional<string>;

  // Set default deserializer for writing response body.
  public abstract getDeserializer(): (
    data: string,
    reviver?: (...args: any[]) => void,
  ) => Optional<PlainObjectLiteral>;
}
