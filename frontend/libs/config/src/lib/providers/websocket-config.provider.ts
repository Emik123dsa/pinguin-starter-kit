import { FactoryProvider } from '@angular/core';
import {
  ClientEnvironmentOptions,
  CLIENT_ENVIRONMENT_OPTIONS,
} from '@pinguin/environment';
import { ClientWebSocketConfigRef } from '../websocket-config-ref';

/**
 * Client web socket config ref.
 */
export class ClientWebSocketConfig extends ClientWebSocketConfigRef {
  /**
   * Fallback reconnect attempts of client web socket config.
   */
  private readonly RECONNECT_ATTEMPTS = 1;

  /**
   * Fallback reconnect interval of client web socket config.
   */
  private readonly RECONNECT_INTERVAL = 1000;

  /**
   * Message event serializer of client web socket config.
   */
  private readonly MESSAGE_EVENT_SERIALIZER = (data: unknown): string =>
    JSON.stringify(data);

  /**
   * Message event deserializer of client web socket config.
   */
  private readonly MESSAGE_EVENT_DESERIALIZER = (
    event: MessageEvent
  ): Optional<string> => JSON.parse(event.data);

  public override getConnectionPool(): number {
    return this.options.connectionPool;
  }

  public override getReconnectAttempts(): number {
    return this.options.reconnectAttempts || this.RECONNECT_ATTEMPTS;
  }

  public override getReconnectInterval(): number {
    return this.options.reconnectInterval || this.RECONNECT_INTERVAL;
  }

  // Creates a new serializer as fallback, in the case if options serializer is empty.
  public override getSerializer(): (data: unknown) => Optional<string> {
    return this.options.serializer || this.MESSAGE_EVENT_SERIALIZER;
  }

  // Creates a new serializer as fallback, in the case if options serializer is empty.
  public override getDeserializer(): (event: MessageEvent) => Optional<string> {
    return this.options.deserializer || this.MESSAGE_EVENT_DESERIALIZER;
  }
}

// FactoryProvider for client websocket config.
export const CLIENT_WEBSOCKET_CONFIG_PROVIDER: FactoryProvider = {
  provide: ClientWebSocketConfigRef,
  useFactory: (options: ClientEnvironmentOptions) => {
    return new ClientWebSocketConfig(options.websocket);
  },
  deps: [CLIENT_ENVIRONMENT_OPTIONS],
  multi: false,
};
