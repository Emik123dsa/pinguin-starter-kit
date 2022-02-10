import { ClientWebSocketOptions } from '@pinguin/environment';

import { AbstractConnection } from './abstract-connection-ref';

/**
 * Client web socket config ref.
 */
export abstract class ClientWebSocketConfigRef extends AbstractConnection<ClientWebSocketOptions> {
  public abstract getConnectionPool(): number;

  public abstract getReconnectAttempts(): number;

  public abstract getReconnectInterval(): number;

  public abstract getSerializer(): (data: unknown) => Optional<string>;

  public abstract getDeserializer(): (event: MessageEvent) => Optional<string>;
}