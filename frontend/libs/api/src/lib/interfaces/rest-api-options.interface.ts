import { ClientConnectionOptions, PlainObjectLiteral } from '@pinguin/common';

export interface ClientRestApiOptions extends ClientConnectionOptions {
  headerMap: Map<string, string>;
  queryParamMap: Map<string, string>;

  // Set default attempts for API requests,
  // otherwise they could be override in the service context.
  retryAttempts?: number;
  errorAttempts?: number;

  serializer?: (data: PlainObjectLiteral) => Optional<string>;
}