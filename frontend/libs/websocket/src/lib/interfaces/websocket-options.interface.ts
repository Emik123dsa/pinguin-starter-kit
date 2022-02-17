import { ClientConnectionOptions, PlainObjectLiteral } from '@pinguin/common';

export interface ClientWebSocketOptions extends ClientConnectionOptions {
  typeKey?: string;
  connectionPool: number;
  reconnectAttempts?: number;
  reconnectInterval?: number;
  serializer?: (data: PlainObjectLiteral) => Optional<string>;
  deserializer?: (event: MessageEvent) => Optional<PlainObjectLiteral>;
}
