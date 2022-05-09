import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLIENT_APP_CONFIG_PROVIDER } from './providers';
import { ConfigServiceModule } from './services';

@NgModule({
  imports: [CommonModule, ConfigServiceModule],
  providers: [],
  schemas: [],
})
export class ClientConfigModule {
  public static forRoot(): ModuleWithProviders<ClientConfigModule> {
    return {
      ngModule: ClientConfigModule,
      providers: [CLIENT_APP_CONFIG_PROVIDER],
    };
  }
}
