// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { PlainObjectLiteral } from '@pinguin/common';

import {
  ClientEnvironment,
  ClientEnvironmentOptions,
} from '@pinguin/environment';

import { VERSION } from '@pinguin/core';

// ClientEnvironmentOptions as an environment for development only.
export const environment: ClientEnvironmentOptions = {
  production: false,
  environment: ClientEnvironment.Development,
  hotModuleReplacement: false,
  baseDomain: 'localhost',
  app: {
    id: 'pinguin-app-%s'.replace('%s', VERSION.full),
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
    retryAttempts: 3,
    errorAttempts: 1,
    queryParamMap: new Map([['proxy', 'true']]),
    headerMap: new Map([
      ['Accept', 'application/json; charset=UTF-8'],
      ['Content-Type', 'application/json; charset=UTF-8'],
    ]),
  },
  websocket: {
    baseUrl: {
      scheme: 'ws',
      hostname: 'localhost',
      port: 80,
      prefix: 'stream',
      version: 'v1',
    },
    connectionPool: 1,
    reconnectAttempts: 10,
    reconnectInterval: 1000,
    serializer: (data: PlainObjectLiteral) => JSON.stringify(data),
    deserializer: (event: MessageEvent): PlainObjectLiteral =>
      JSON.parse(event.data),
  },
  runtimePlugins: [StoreDevtoolsModule.instrument()],
  packages: [],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error'; // Included with Angular CLI.
