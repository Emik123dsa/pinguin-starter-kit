import { PlainObjectLiteral } from '@pinguin/utils';
import { ClientConnectionOptions } from '@pinguin/common';

export interface ClientRestApiOptions extends ClientConnectionOptions {
  headerMap: Map<string, string>;
  queryParamMap: Map<string, string>;

  // Set default attempts for API requests,
  // otherwise they could be override in the service context.
  retryAttempts?: number;
  errorAttempts?: number;

  // Override buffering config with `shareReplay` method.
  refCount?: boolean;
  bufferSize?: number;

  serializer?: (data: PlainObjectLiteral) => Optional<string>;
}
