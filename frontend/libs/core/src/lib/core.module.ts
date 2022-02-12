import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  API_GATEWAY_REQUEST_PROVIDERS,
  DASHBOARD_MODULE_INITIALIZER_PROVIDER,
} from './providers';

@NgModule({
  imports: [CommonModule],
  providers: [API_GATEWAY_REQUEST_PROVIDERS],
  exports: [],
  schemas: [],
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [DASHBOARD_MODULE_INITIALIZER_PROVIDER],
    };
  }
}
