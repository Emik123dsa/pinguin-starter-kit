import { ModuleWithProviders, NgModule } from '@angular/core';

import { ClientRestApiOptions } from './interfaces';

import {
  CLIENT_REST_API_CONFIG_PROVIDER,
  API_GATEWAY_REQUEST_INTERCEPTOR_PROVIDER,
} from './providers';

@NgModule({
  imports: [],
  providers: [],
})
export class ClientRestApiModule {
  public static forRoot(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    options: ClientRestApiOptions = {} as ClientRestApiOptions,
  ): ModuleWithProviders<ClientRestApiModule> {
    return {
      ngModule: ClientRestApiModule,
      providers: [
        API_GATEWAY_REQUEST_INTERCEPTOR_PROVIDER,
        CLIENT_REST_API_CONFIG_PROVIDER,
      ],
    };
  }
}
