import { VERSION } from '@pinguin/core';
import {
  ClientEnvironment,
  ClientEnvironmentOptions,
} from '@pinguin/environment';

// ClientEnvironmentOptions as an environment for development only.
export const environment: ClientEnvironmentOptions = {
  production: false,
  environment: ClientEnvironment.Staging,
  baseDomain: 'localhost',
  app: {
    id: 'pinguin-app-id',
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
  runtimePlugins: [],
};
