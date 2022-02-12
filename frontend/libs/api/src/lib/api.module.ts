import { inject, ModuleWithProviders, NgModule } from '@angular/core';
import { PlainObjectLiteral } from '@pinguin/common';
import { CLIENT_ENVIRONMENT_OPTIONS } from '@pinguin/environment';
import { ClientRestApiOptions } from './interfaces';

import {
  CLIENT_REST_API_CONFIG_PROVIDER,
  BASE_API_GATEWAY_REQUEST_PROVIDER,
} from './providers';

@NgModule({
  imports: [],
  providers: [CLIENT_REST_API_CONFIG_PROVIDER],
})
export class ClientApiModule {
  public static forRoot(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    options: ClientRestApiOptions = {} as ClientRestApiOptions,
  ): ModuleWithProviders<ClientApiModule> {
    return {
      ngModule: ClientApiModule,
      providers: [BASE_API_GATEWAY_REQUEST_PROVIDER],
    };
  }
}
