import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InMemoryRestApiDataService } from './in-memory-api-data.service';
import { IN_MEMORY_STORAGE_OPTIONS_PROVIDER } from './in-memory-storage.providers';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { inMemoryRestApiOptionsFactory } from './in-memory-storage.providers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryRestApiDataService,
      inMemoryRestApiOptionsFactory({
        // TODO: implement environment injection tokens.
        // Currently memory config will be used default by `memory-storage` library.
        // You can override any time whether is it required.
      }),
    ),
  ],
  providers: [InMemoryRestApiDataService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class InMemoryStorageModule {
  public static forRoot(): ModuleWithProviders<InMemoryStorageModule> {
    return {
      ngModule: InMemoryStorageModule,
      providers: [IN_MEMORY_STORAGE_OPTIONS_PROVIDER],
    };
  }
}
