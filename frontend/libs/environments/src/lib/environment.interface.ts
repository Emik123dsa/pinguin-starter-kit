import { ModuleWithProviders, Type } from '@angular/core';
import { ClientRestApiOptions } from '@pinguin/api';

import { ClientApplicationOptions } from '@pinguin/config';

import { ClientWebSocketOptions } from '@pinguin/websocket';

/* eslint-disable @typescript-eslint/ban-types */

import { ClientEnvironment } from './environment.enum';

// Define client environment options as a global interface.
export interface ClientEnvironmentOptions {
  production: boolean;
  hotModuleReplacement: boolean;

  environment: ClientEnvironment;

  // Client application properties.
  app: ClientApplicationOptions;

  // Base browser static variables.
  baseHref: string;
  baseDomain: Optional<string>;

  // Provide REST api client module.
  api: ClientRestApiOptions;

  // Provide WebSocket client module.
  websocket: ClientWebSocketOptions;

  packages?: Array<object>;

  // Modules will be executed in runtime environment,
  // for instance, under development hacking.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  runtimePlugins: Array<any[] | Type<any> | ModuleWithProviders<{}>>;
}
