import { HttpContextToken } from '@angular/common/http';
import { FactoryProvider } from '@angular/core';
import {
  ClientEnvironmentOptions,
  CLIENT_ENVIRONMENT_OPTIONS,
} from '@pinguin/environment';

import { ClientRestApiConfigRef } from '../api-config-ref';

/**
 * Client rest api config.
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
}

function clientRestApiConfigProviderFactory(
  options: ClientEnvironmentOptions,
): ClientRestApiConfigRef {
  return new ClientRestApiConfig(options.api);
}

// FactoryProvider for client rest api config.
export const CLIENT_REST_API_CONFIG_PROVIDER: FactoryProvider = {
  provide: ClientRestApiConfigRef,
  useFactory: clientRestApiConfigProviderFactory,
  deps: [CLIENT_ENVIRONMENT_OPTIONS],
  multi: false,
};
