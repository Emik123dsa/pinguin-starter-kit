import { ObjectLiteral } from '@pinguin/utils';
import { ClientConnectionOptions } from '@pinguin/common';

export interface ClientWebSocketOptions extends ClientConnectionOptions {
  connectionPool: number;
  typeKey?: string;
  reconnectAttempts?: number;
  reconnectInterval?: number;
  serializer?: (data: ObjectLiteral) => Optional<string>;
  deserializer?: (event: MessageEvent) => Optional<ObjectLiteral>;
}
