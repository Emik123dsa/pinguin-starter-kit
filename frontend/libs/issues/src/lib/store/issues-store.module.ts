import { NgModule, Type } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { IssuesRoadmapContainerEffects } from '@pinguin/roadmap';

@NgModule({
  imports: [
    EffectsModule.forFeature(
      new Array<Type<unknown>>(IssuesRoadmapContainerEffects),
    ),
  ],
  providers: [],
  exports: [],
})
export class IssuesStoreModule {}
