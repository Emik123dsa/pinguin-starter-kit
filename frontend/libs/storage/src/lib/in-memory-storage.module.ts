import {
  ModuleWithProviders,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { InMemoryDataService } from './in-memory-data.service';
import {
  inMemoryDataStorageOptionsFactory,
  IN_MEMORY_STORAGE_OPTIONS_PROVIDER,
} from './in-memory-storage.providers';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [],
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      {},
      //   inMemoryDataStorageOptionsFactory(),
      // TODO: implement environment injection tokens.
      // Currently memory config will be used default by `memory-storage` library.
      // You can override any time whether is it required.
    ),
  ],
  providers: [],
  schemas: [],
})
export class InMemoryStorageModule {
  public static forRoot(): ModuleWithProviders<InMemoryStorageModule> {
    return {
      ngModule: InMemoryStorageModule,
      providers: [],
    };
  }
}
