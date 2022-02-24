import { FactoryProvider, Inject } from '@angular/core';
import { CLIENT_ENVIRONMENT_OPTIONS } from '@pinguin/environments';

import { InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';
import { IN_MEMORY_STORAGE_OPTIONS } from './in-memory-storage.tokens';

// `in-memory-web-api` data config factory.
export function inMemoryRestApiOptionsFactory(
  options?: InMemoryBackendConfigArgs,
): InMemoryBackendConfigArgs {
  return {
    passThruUnknownUrl: true,
    delay: 1000,
    apiBase: 'api',
    rootPath: '/assets/data/',
    dataEncapsulation: true,
    ...options,
  };
}

export const IN_MEMORY_STORAGE_OPTIONS_PROVIDER: FactoryProvider = {
  provide: IN_MEMORY_STORAGE_OPTIONS,
  useFactory: inMemoryRestApiOptionsFactory,
  deps: [new Inject(CLIENT_ENVIRONMENT_OPTIONS)],
  multi: false,
};
