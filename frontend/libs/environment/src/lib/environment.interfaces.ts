/* eslint-disable @typescript-eslint/ban-types */
import { ModuleWithProviders, Type, Version } from '@angular/core';

import { ClientEnvironment } from './environment.enums';

export interface ClientApplicationOptions {
  id: string;
  name: string;
  version: Version;
}

export interface ClientBaseUrlOptions {
  scheme: 'http' | 'https' | 'ws' | 'wss';
  hostname: string;
  port: number;
  prefix?: string;
  version?: string;
}

export interface ClientOAuthOptions {
  clientId: Optional<string>;
  clientSecret: Optional<string>;
  accessToken: Optional<string>;
}

export interface ClientConnectOptions {
  baseUrl: ClientBaseUrlOptions;
}

export interface ClientRestApiOptions extends ClientConnectOptions {
  headerMap: Map<string, string>;
  queryParamMap: Map<string, string>;

  // Set default attempts for API requests,
  // otherwise they could be override in the service context.
  retryAttempts?: number;
  errorAttempts?: number;
}

export interface ClientWebSocketOptions extends ClientConnectOptions {
  connectionPool: number;
  reconnectAttempts?: number;
  reconnectInterval?: number;
  serializer?: (data: unknown) => Optional<string>;
  deserializer?: (event: MessageEvent) => Optional<string>;
}

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
