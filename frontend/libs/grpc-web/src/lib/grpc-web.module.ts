import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class ClientGRpcWebModule {
  public static forRoot(): ModuleWithProviders<ClientGRpcWebModule> {
    return { ngModule: ClientGRpcWebModule, providers: [] };
  }
}
