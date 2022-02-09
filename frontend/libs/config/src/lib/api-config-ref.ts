import { HttpContextToken } from '@angular/common/http';
import { ClientRestApiOptions } from '@pinguin/environment';
import { AbstractConnection } from './abstract-connection-ref';

/**
 * Client rest api config ref.
 */
export abstract class ClientRestApiConfigRef extends AbstractConnection<ClientRestApiOptions> {
  public abstract getHeaderMap(): Map<string, string>;

  public abstract getQueryParamMap(): Map<string, string>;

  // Set default attempts for API requests,
  // otherwise they could be override in the service context.
  public abstract getRetryAttempts(): HttpContextToken<number>;

  public abstract getErrorAttempts(): HttpContextToken<number>;
}
