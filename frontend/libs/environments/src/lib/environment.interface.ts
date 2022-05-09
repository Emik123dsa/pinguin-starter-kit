import { ModuleWithProviders, Type } from '@angular/core';
import { Action, MetaReducer } from '@ngrx/store';
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
  baseUrl: string;
  baseDomain: Optional<string>;

  // Provide REST api client module.
  api: ClientRestApiOptions;

  // Provide WebSocket client module.
  websocket: ClientWebSocketOptions;

  versions?: Array<object>;

  // Modules will be executed in runtime environment,
  // for instance, under development hacking.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tools: Array<any[] | Type<any> | ModuleWithProviders<{}>>;

  // Provide any meta reducers, including logging cascade lever.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metaReducers: MetaReducer<{}, Action>[];
}
