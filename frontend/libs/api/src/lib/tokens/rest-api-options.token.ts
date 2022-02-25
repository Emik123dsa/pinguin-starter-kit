import { inject, InjectionToken } from '@angular/core';
import {
  ClientEnvironmentOptions,
  CLIENT_ENVIRONMENT_OPTIONS,
} from '@pinguin/environments';
import { ClientRestApiOptions } from '../interfaces';

function clientRestApiOptionsFactory(): ClientRestApiOptions {
  const options: ClientEnvironmentOptions = inject(CLIENT_ENVIRONMENT_OPTIONS);
  return options.api;
}

export const CLIENT_REST_API_OPTIONS = new InjectionToken<ClientRestApiOptions>(
  'CLIENT_REST_API_OPTIONS',
  {
    providedIn: 'root',
    factory: clientRestApiOptionsFactory,
  },
);
