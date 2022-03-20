import { VERSION } from '@pinguin/core';

import {
  ClientEnvironment,
  ClientEnvironmentOptions,
} from '@pinguin/environments';

import { StringUtils } from '@pinguin/utils';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// ClientEnvironmentOptions as an environment for development only.
export const environment: ClientEnvironmentOptions = {
  production: true,
  environment: ClientEnvironment.Staging,
  hotModuleReplacement: false,
  baseHref: '/',
  baseDomain: 'localhost',
  app: {
    id: StringUtils.format('pinguin-{name}-client-{full}', {
      ...VERSION,
      name: ClientEnvironment.Staging,
    }),
    name: 'pinguin-client',
    version: VERSION,
  },
  api: {
    baseUrl: {
      scheme: 'https',
      hostname: '61ee5f30d593d20017dbad98.mockapi.io',
      port: 443,
      prefix: 'pinguin',
      version: 'api',
    },
    queryParamMap: new Map([['proxy', 'true']]),
    headerMap: new Map([
      ['Accept', 'application/json; charset=UTF-8'],
      ['Content-Type', 'application/json; charset=UTF-8'],
    ]),
  },
  websocket: {
    connectionPool: 1,
    baseUrl: {
      scheme: 'ws',
      hostname: 'localhost',
      port: 80,
      prefix: 'stream',
      version: 'v1',
    },

    // An example of production config for WebSocket.
    reconnectAttempts: 10,
    reconnectInterval: 1000,
    serializer: (data) => JSON.stringify(data),
    deserializer: (event: MessageEvent) => JSON.parse(event.data),
  },

  runtimePlugins: [
    StoreDevtoolsModule.instrument({
      name: StringUtils.format('pinguin-{0}-client', ClientEnvironment.Staging),
      maxAge: 20,
      logOnly: false,
      serialize: false,
      autoPause: false,
    }),
  ],

  runtimeStoreMetaReducers: [],
};
