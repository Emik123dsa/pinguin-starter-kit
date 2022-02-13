import {
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { ClientRestApiModule } from '@pinguin/api';

import {
  API_GATEWAY_REQUEST_PROVIDERS,
  DASHBOARD_MODULE_INITIALIZER_PROVIDER,
} from './providers';
import { CoreStoreModule } from './store';

@NgModule({
  imports: [CommonModule, ClientRestApiModule.forRoot(), CoreStoreModule],
  providers: [API_GATEWAY_REQUEST_PROVIDERS],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [DASHBOARD_MODULE_INITIALIZER_PROVIDER],
    };
  }
}
