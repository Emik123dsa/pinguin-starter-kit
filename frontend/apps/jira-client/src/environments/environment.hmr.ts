// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import packageJson from '../../package.json';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  ClientEnvironment,
  ClientEnvironmentOptions,
} from '@pinguin/environments';

import { VERSION } from '@pinguin/core';
import { StringUtils } from '@pinguin/utils';

// ClientEnvironmentOptions as an environment for development only.
export const environment: ClientEnvironmentOptions = {
  production: false,
  environment: ClientEnvironment.HMR,
  hotModuleReplacement: true,
  baseDomain: 'localhost',
  app: {
    id: StringUtils.format('pinguin-{name}-client-{full}', {
      ...VERSION,
      name: ClientEnvironment.HMR,
    }),
    name: 'pinguin-client',
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
    connectionPool: 1,
    baseUrl: {
      scheme: 'ws',
      hostname: 'localhost',
      port: 80,
      prefix: 'stream',
      version: 'v1',
    },
    typeKey: 'type',
    reconnectAttempts: 10,
    reconnectInterval: 1000,
    serializer(data): string {
      return JSON.stringify(data);
    },
    deserializer(event: MessageEvent) {
      return JSON.parse(event.data);
    },
  },
  packages: [],
  runtimePlugins: [
    StoreDevtoolsModule.instrument({
      name: StringUtils.format('pinguin-{0}-client', ClientEnvironment.HMR),
      maxAge: 20,
      logOnly: true,
      serialize: true,
      autoPause: true,
    }),
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error'; // Included with Angular CLI.
