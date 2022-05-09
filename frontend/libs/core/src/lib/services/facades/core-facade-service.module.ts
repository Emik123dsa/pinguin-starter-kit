import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({ imports: [], exports: [] })
export class CoreFacadeServiceModule {
  public static forRoot(): ModuleWithProviders<CoreFacadeServiceModule> {
    return { ngModule: CoreFacadeServiceModule, providers: [] };
  }
}
