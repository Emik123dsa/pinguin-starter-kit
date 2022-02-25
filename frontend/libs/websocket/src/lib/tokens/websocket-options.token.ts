import { inject, InjectionToken } from '@angular/core';
import {
  ClientEnvironmentOptions,
  CLIENT_ENVIRONMENT_OPTIONS,
} from '@pinguin/environments';

import { ClientWebSocketOptions } from '../interfaces';

function clientWebSocketOptionsFactory(): ClientWebSocketOptions {
  const options: ClientEnvironmentOptions = inject(CLIENT_ENVIRONMENT_OPTIONS);
  return options.websocket;
}

export const CLIENT_WEBSOCKET_OPTIONS =
  new InjectionToken<ClientWebSocketOptions>('CLIENT_WEBSOCKET_OPTIONS', {
    providedIn: 'root',
    factory: clientWebSocketOptionsFactory,
  });
