import { FactoryProvider, Inject, Self } from '@angular/core';

import { InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';
import { IN_MEMORY_DATA_STORAGE_OPTIONS } from './in-memory-storage.tokens';

// `in-memory-web-api` data config factory.
export function inMemoryDataStorageOptionsFactory(
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
  provide: IN_MEMORY_DATA_STORAGE_OPTIONS,
  useFactory: inMemoryDataStorageOptionsFactory,
  // deps: [[new Self()]],
  multi: false,
};
