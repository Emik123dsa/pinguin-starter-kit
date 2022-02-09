import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CLIENT_APP_CONFIG_PROVIDER,
  CLIENT_REST_API_CONFIG_PROVIDER,
  CLIENT_WEBSOCKET_CONFIG_PROVIDER,
} from './providers';

@NgModule({
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    CLIENT_APP_CONFIG_PROVIDER,
    CLIENT_REST_API_CONFIG_PROVIDER,
    CLIENT_WEBSOCKET_CONFIG_PROVIDER,
  ],
  exports: [],
})
export class ClientConfigModule {}
