import { AbstractConnectionConfig } from '@pinguin/common';
import { ObjectLiteral } from '@pinguin/utils';

import { ClientWebSocketOptions } from '../interfaces';

/**
 * Client web socket config ref.
 */
export abstract class ClientWebSocketConfigRef extends AbstractConnectionConfig<ClientWebSocketOptions> {
  /**
   * Connection pools amount.
   *
   * @public
   * @abstract
   * @returns {number}
   */
  public abstract getConnectionPool(): number;

  /**
   * Attempts for reconnection in the case whether it was interrupted.
   *
   * @public
   * @abstract
   * @returns {number}
   */
  public abstract getReconnectAttempts(): number;

  /**
   * Interval for reconnection in the case whether it was interrupted.
   *
   * @public
   * @abstract
   * @returns {number}
   */
  public abstract getReconnectInterval(): number;

  /**
   * WebSocket message event serializer.
   *
   * @public
   * @abstract
   * @returns {(
      data: ObjectLiteral,
    ) => Optional<string>}
   */
  public abstract getSerializer(): (data: ObjectLiteral) => Optional<string>;

  /**
   * WebSocket message event deserializer.
   *
   * @public
   * @abstract
   * @returns {(event: MessageEvent) => Optional<string>}
   */
  public abstract getDeserializer(): (event: MessageEvent) => Optional<string>;
}
