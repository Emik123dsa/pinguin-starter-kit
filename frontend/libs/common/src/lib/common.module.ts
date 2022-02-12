import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { WINDOW_PROVIDERS } from './providers';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [],
  exports: [CommonModule],
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
