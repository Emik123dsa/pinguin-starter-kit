import { CdkTableModule } from '@angular/cdk/table';
import { ModuleWithProviders, NgModule } from '@angular/core';

const cdkModules = [CdkTableModule];

@NgModule({
  imports: [...cdkModules],
  exports: [...cdkModules],
})
export class FeatureRoadmapCdkModule {
  public static forRoot(): ModuleWithProviders<FeatureRoadmapCdkModule> {
    return {
      ngModule: FeatureRoadmapCdkModule,
      providers: [],
    };
  }
}
