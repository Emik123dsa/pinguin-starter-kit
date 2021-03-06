import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CLIENT_WEBSOCKET_CONFIG_PROVIDER } from './providers';

@NgModule({
  imports: [CommonModule],
  providers: [],
})
export class ClientWebSocketModule {
  public static forRoot(): ModuleWithProviders<ClientWebSocketModule> {
    return {
      ngModule: ClientWebSocketModule,
      providers: [CLIENT_WEBSOCKET_CONFIG_PROVIDER],
    };
  }
}
