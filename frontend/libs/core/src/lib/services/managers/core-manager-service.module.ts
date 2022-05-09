import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({ imports: [], exports: [] })
export class CoreManagerServiceModule {
  public static forRoot(): ModuleWithProviders<CoreManagerServiceModule> {
    return { ngModule: CoreManagerServiceModule, providers: [] };
  }
}
