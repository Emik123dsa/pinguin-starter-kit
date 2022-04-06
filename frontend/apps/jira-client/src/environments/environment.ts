// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { StringUtils } from '@pinguin/utils';

import {
  ClientEnvironment,
  ClientEnvironmentOptions,
} from '@pinguin/environments';

import { VERSION } from '@pinguin/core';

import { InMemoryStorageModule } from '@pinguin/storage';

// ClientEnvironmentOptions as an environment for development only.
export const environment: ClientEnvironmentOptions = {
  production: false,
  environment: ClientEnvironment.Development,
  hotModuleReplacement: false,
  baseHref: '/',
  baseDomain: 'localhost',
  app: {
    id: StringUtils.format('pinguin-{name}-client-{full}', {
      ...VERSION,
      name: ClientEnvironment.Development,
    }),
    name: 'pinguin-client',
    version: VERSION,
    configUrl: '/assets/config/app.config.json',
    // Here will be registered all of the modules (e.g. `lazy-loaded`).
    // Every `lazy-loaded` module will be overridden or initialized in this context.
    modules: new Map<string, string>([]),
  },
  api: {
    baseUrl: {
      scheme: 'http',
      hostname: 'localhost',
      port: 80,
      prefix: 'api',
      version: 'v1',
    },
    bufferSize: 150,
    refCount: true,
    retryAttempts: 3,
    errorAttempts: 1,
    queryParamMap: new Map([['proxy', 'true']]),
    headerMap: new Map([
      ['Accept', 'application/json; charset=UTF-8'],
      ['Content-Type', 'application/json; charset=UTF-8'],
    ]),

    // Override default serializer for rest api handlers:
    // TODO: implement WASM module for serializer and deserializer.
    // HINT: this method allow this module to use any `crate`
    // module of the WASM, hence => can increase performance of serializing or deserializing JSON context.
    // # Examples:
    // serializer: (data: PlainObjectLiteral) => JSON.stringify(data),
  },
  websocket: {
    baseUrl: {
      scheme: 'ws',
      hostname: 'localhost',
      port: 80,
      prefix: 'event-bus',
      version: 'v1',
    },
    typeKey: 'type',
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
    // InMemoryStorageModule.forRoot(),

    StoreDevtoolsModule.instrument({
      name: StringUtils.format(
        'pinguin-{0}-client',
        ClientEnvironment.Development,
      ),
      maxAge: 25,
      logOnly: true,
      serialize: {
        options: {
          undefined: true,
        },
      },
      features: {
        pause: false,
        lock: true,
        persist: true,
      },

      autoPause: false,
    }),
  ],

  runtimeStoreMetaReducers: [storeFreeze],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error'; // Included with Angular CLI.
