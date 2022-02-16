import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InMemoryRestApiDataService } from './in-memory-api-data.service';
import { IN_MEMORY_STORAGE_OPTIONS_PROVIDER } from './in-memory-storage.providers';

@NgModule({
  declarations: [],
  imports: [CommonModule],
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
