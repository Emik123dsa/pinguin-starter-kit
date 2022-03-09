import { NgModule, Type } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { RoadmapContainerEffects } from './effects';

@NgModule({
  imports: [
    EffectsModule.forFeature(new Array<Type<unknown>>(RoadmapContainerEffects)),
  ],
  exports: [EffectsModule],
  providers: [RoadmapContainerEffects],
})
export class IssuesStoreModule {}
