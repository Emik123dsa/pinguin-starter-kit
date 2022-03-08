import { FactoryProvider, Self } from '@angular/core';
import { PlainObjectLiteral } from '@pinguin/utils';

import { CLIENT_WEBSOCKET_OPTIONS } from '../tokens';
import { ClientWebSocketConfigRef } from '../classes';
import { ClientWebSocketOptions } from '../interfaces';

// clientWebSocketDefaultOptionsFactory for providing fallback config.
export function clientWebSocketDefaultOptionsFactory(
  options: ClientWebSocketOptions,
): ClientWebSocketOptions {
  return {
    reconnectAttempts: 1,
    reconnectInterval: 1000,
    serializer(data: PlainObjectLiteral): Optional<string> {
      return JSON.stringify(data);
    },
    deserializer(event: MessageEvent): Optional<PlainObjectLiteral> {
      return JSON.parse(event.data);
    },
    ...options,
  };
}

/**
 * Client web socket config ref.
 */
export class ClientWebSocketConfig extends ClientWebSocketConfigRef {
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
  options: ClientWebSocketOptions,
): ClientWebSocketConfigRef {
  const webSocketOptions: ClientWebSocketOptions =
    clientWebSocketDefaultOptionsFactory(options);
  return new ClientWebSocketConfig(webSocketOptions);
}

// FactoryProvider for client websocket config.
export const CLIENT_WEBSOCKET_CONFIG_PROVIDER: FactoryProvider = {
  provide: ClientWebSocketConfigRef,
  useFactory: clientWebSocketConfigProviderFactory,
  deps: [[new Self(), CLIENT_WEBSOCKET_OPTIONS]],
  multi: false,
};
