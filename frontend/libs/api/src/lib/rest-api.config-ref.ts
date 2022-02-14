import { HttpContextToken } from '@angular/common/http';
import type { ClientRestApiOptions } from './interfaces';
import { AbstractConnectionConfig, PlainObjectLiteral } from '@pinguin/common';

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

  // Set default serializer for writing request body.
  public abstract getSerializer(): (
    data: PlainObjectLiteral,
  ) => Optional<string>;
}