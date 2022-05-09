// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { Version } from '@angular/core';

const VERSION = new Version('0.0.0-TESTING');

import {
  ClientEnvironment,
  ClientEnvironmentOptions,
  ClientWebSocketOptions,
} from '@pinguin/environments';

// ClientEnvironmentOptions as an environment for development only.
export const environment: ClientEnvironmentOptions = {
  production: false,
  environment: ClientEnvironment.Testing,
  hotModuleReplacement: false,
  baseDomain: 'localhost',
  app: {
    id: 'pinguin-testing',
    name: 'pinguin-client',
    version: VERSION,
  },
  api: {
    baseUrl: {
      scheme: 'https',
      hostname: '61ee5f30d593d20017dbad98.mockapi.io',
      port: 80,
      prefix: 'pinguin',
      version: 'api',
    },
    retryAttempts: 3,
    errorAttempts: 1,
    queryParamMap: new Map([['proxy', 'true']]),
    headerMap: new Map([
      ['Accept', 'application/json; charset=UTF-8'],
      ['Content-Type', 'application/json; charset=UTF-8'],
    ]),
  },
  websocket: {} as ClientWebSocketOptions,
  tools: [],
  versions: [],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error'; // Included with Angular CLI.
