import { ModuleWithProviders, NgModule } from '@angular/core';
import { BASE_API_GATEWAY_REQUEST_PROVIDER } from './providers';

@NgModule({
  imports: [],
  providers: [BASE_API_GATEWAY_REQUEST_PROVIDER],
})
export class ClientApiModule {
  public static forRoot(): ModuleWithProviders<ClientApiModule> {
    return {
      ngModule: ClientApiModule,
      providers: [],
    };
  }
}
