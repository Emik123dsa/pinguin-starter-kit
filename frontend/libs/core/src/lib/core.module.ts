import {
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { API_GATEWAY_REQUEST_PROVIDERS } from './providers';

import { ClientApiModule } from '@pinguin/api';

import { DASHBOARD_MODULE_INITIALIZER_PROVIDER } from '@pinguin/dashboard';

@NgModule({
  imports: [CommonModule, ClientApiModule.forRoot()],
  providers: [API_GATEWAY_REQUEST_PROVIDERS],
  exports: [CommonModule, ClientApiModule],
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
