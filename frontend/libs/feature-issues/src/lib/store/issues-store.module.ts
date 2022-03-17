import { NgModule, Type } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { IssuesRoadmapEffects } from '@pinguin/feature-roadmap';

@NgModule({
  imports: [
    EffectsModule.forFeature(new Array<Type<unknown>>(IssuesRoadmapEffects)),
  ],
  exports: [EffectsModule],
  providers: [IssuesRoadmapEffects],
})
export class IssuesStoreModule {}
