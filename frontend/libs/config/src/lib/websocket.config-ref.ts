import { PlainObjectLiteral } from '@pinguin/common';
import { ClientWebSocketOptions } from './interfaces';

/**
 * Client web socket config ref.
 */
export abstract class ClientWebSocketConfigRef extends AbstractConnection<ClientWebSocketOptions> {
  public abstract getConnectionPool(): number;

  public abstract getReconnectAttempts(): number;

  public abstract getReconnectInterval(): number;

  public abstract getSerializer(): (
    data: PlainObjectLiteral,
  ) => Optional<string>;

  public abstract getDeserializer(): (event: MessageEvent) => Optional<string>;
}
