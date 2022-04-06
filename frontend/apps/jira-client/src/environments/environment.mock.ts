// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { StringUtils } from '@pinguin/utils';

StringUtils;
import {
  ClientEnvironment,
  ClientEnvironmentOptions,
} from '@pinguin/environments';

import { VERSION } from '@pinguin/core';
import {
  InMemoryRestApiDataService,
  inMemoryRestApiOptionsFactory,
} from '@pinguin/storage';

// ClientEnvironmentOptions as an environment for development only.
export const environment: ClientEnvironmentOptions = {
  production: false,
  environment: ClientEnvironment.Mock,
  hotModuleReplacement: false,
  baseHref: '/',
  baseDomain: 'localhost',
  app: {
    id: StringUtils.format('pinguin-{name}-client-{full}', {
      ...VERSION,
      name: ClientEnvironment.Mock,
    }),
    name: 'pinguin-client',
    version: VERSION,
  },
  api: {
    baseUrl: {
      scheme: 'http',
      hostname: 'localhost',
      port: 4200,
      prefix: 'api',
      version: undefined,
    },
    retryAttempts: 3,
    errorAttempts: 1,
    queryParamMap: new Map([['proxy', 'true']]),
    headerMap: new Map([
      ['Accept', 'application/json; charset=UTF-8'],
      ['Content-Type', 'application/json; charset=UTF-8'],
    ]),

    // Override default serializer for rest api handlers:
    // # Examples:
    // serializer: (data: PlainObjectLiteral) => JSON.stringify(data),
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
    // Override default serializer and deserializer for WebSocket handlers:
    // # Examples:
    // serializer: (data: PlainObjectLiteral) => JSON.stringify(data),
    // deserializer: (event: MessageEvent): PlainObjectLiteral =>
    //   JSON.parse(event.data),
  },
  packages: [],
  runtimePlugins: [
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryRestApiDataService,
      inMemoryRestApiOptionsFactory({
        // TODO: implement environment injection tokens.
        // Currently memory config will be used default by `memory-storage` library.
      }),
    ),
    StoreDevtoolsModule.instrument({
      name: StringUtils.format('pinguin-{0}-client', ClientEnvironment.Mock),
      maxAge: 20,
      logOnly: false,
      serialize: false,
      autoPause: false,
    }),
  ],
  runtimeStoreMetaReducers: [],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error'; // Included with Angular CLI.
