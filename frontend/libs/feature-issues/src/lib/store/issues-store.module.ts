import { NgModule, Type } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonStoreModule } from '@pinguin/common';

import { RoadmapContainerEffects } from './effects';

@NgModule({
  imports: [
    CommonStoreModule,
    EffectsModule.forFeature(new Array<Type<unknown>>(RoadmapContainerEffects)),
  ],
  exports: [CommonStoreModule, EffectsModule],
  providers: [RoadmapContainerEffects],
})
export class IssuesStoreModule {}
