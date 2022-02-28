import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { CommonStoreModule } from './store';

import { WINDOW_PROVIDERS } from './providers';

@NgModule({
  imports: [CommonModule, CommonStoreModule],
  declarations: [],
  providers: [],
  exports: [CommonModule, CommonStoreModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientCommonModule {
  public static forRoot(): ModuleWithProviders<ClientCommonModule> {
    return {
      ngModule: ClientCommonModule,
      providers: [WINDOW_PROVIDERS],
    };
  }
}
