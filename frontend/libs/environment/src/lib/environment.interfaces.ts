import { ClientApplicationOptions } from './../../../config/src/lib/interfaces/app.options.interface';
import { ClientRestApiOptions } from './../../../api/src/lib/interfaces/rest-api.options.interface';
import { ClientWebSocketOptions } from '@pinguin/config';
/* eslint-disable @typescript-eslint/ban-types */

import { ModuleWithProviders, Type } from '@angular/core';
import { ClientEnvironment } from './environment.enums';

// Define client environment options as a global interface.
export interface ClientEnvironmentOptions {
  production: boolean;
  hotModuleReplacement: boolean;

  environment: ClientEnvironment;

  // Client application properties.
  app: ClientApplicationOptions;

  baseDomain: Optional<string>;

  api: ClientRestApiOptions;
  websocket: ClientWebSocketOptions;

  packages?: Array<object>;

  // Modules will be executed in runtime environment,
  // for instance, under development hacking.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  runtimePlugins: Array<any[] | Type<any> | ModuleWithProviders<{}>>;
}
