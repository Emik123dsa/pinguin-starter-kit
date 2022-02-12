import { FactoryProvider } from '@angular/core';
import { PlainObjectLiteral } from '@pinguin/common';
import {
  ClientEnvironmentOptions,
  ClientWebSocketOptions,
  CLIENT_ENVIRONMENT_OPTIONS,
} from '@pinguin/environment';
import { ClientWebSocketConfigRef } from '../websocket.config-ref';

// clientWebSocketOptionsFactory for providing fallback config.
export function clientWebSocketOptionsFactory(
  options: ClientWebSocketOptions,
): ClientWebSocketOptions {
  return {
    reconnectAttempts: 1,
    reconnectInterval: 1000,
    serializer: (data: PlainObjectLiteral): Optional<string> =>
      JSON.stringify(data),
    deserializer: (event: MessageEvent): Optional<PlainObjectLiteral> =>
      JSON.parse(event.data),
    ...options,
  };
}

/**
 * Client web socket config ref.
 */
export class ClientWebSocketConfig extends ClientWebSocketConfigRef {
  public constructor(options: ClientWebSocketOptions) {
    const configOptions: ClientWebSocketOptions =
      clientWebSocketOptionsFactory(options);
    super(configOptions);
  }

  public override getConnectionPool(): number {
    return this.options.connectionPool;
  }

  public override getReconnectAttempts(): number {
    return this.options.reconnectAttempts as number;
  }

  public override getReconnectInterval(): number {
    return this.options.reconnectInterval as number;
  }

  // Creates a new serializer as fallback, in the case if options serializer is empty.
  public override getSerializer() {
    return this.options.serializer as (
      data: PlainObjectLiteral,
    ) => Optional<string>;
  }

  // Creates a new serializer as fallback, in the case if options serializer is empty.
  public override getDeserializer() {
    return this.options.deserializer as (
      data: PlainObjectLiteral,
    ) => Optional<string>;
  }
}

function clientWebSocketConfigProviderFactory(
  options: ClientEnvironmentOptions,
): ClientWebSocketConfigRef {
  return new ClientWebSocketConfig(options.websocket);
}

// FactoryProvider for client websocket config.
export const CLIENT_WEBSOCKET_CONFIG_PROVIDER: FactoryProvider = {
  provide: ClientWebSocketConfigRef,
  useFactory: clientWebSocketConfigProviderFactory,
  deps: [CLIENT_ENVIRONMENT_OPTIONS],
  multi: false,
};
