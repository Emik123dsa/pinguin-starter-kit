import { VERSION } from '@pinguin/core';

import {
  ClientEnvironment,
  ClientEnvironmentOptions,
} from '@pinguin/environment';

import { StringUtils } from '@pinguin/common';

// ClientEnvironmentOptions as an environment for development only.
export const environment: ClientEnvironmentOptions = {
  production: true,
  environment: ClientEnvironment.Staging,
  hotModuleReplacement: false,
  baseDomain: 'localhost',
  app: {
    id: StringUtils.format('pinguin-staging-{full}', VERSION.full),
    name: 'pinguin-jira-client',
    version: VERSION,
  },
  api: {
    baseUrl: {
      scheme: 'http',
      hostname: 'localhost',
      port: 80,
      prefix: 'api',
      version: 'v1',
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
  runtimePlugins: [],
};
