import { NgModule } from '@angular/core';

import { SharedModule } from '@pinguin/shared';

// Provide internal components for `feature-roadmap`.
import { IssuesFieldsTableComponent } from './components/issues-fields-table';
import { IssuesLabelsTableComponent } from './components/issues-labels-table';
import { IssuesRoadmapComponent } from './components/issues-roadmap/issues-roadmap.component';

@NgModule({
  imports: [SharedModule.forRoot()],
  declarations: [
    IssuesRoadmapComponent,
    IssuesFieldsTableComponent,
    IssuesLabelsTableComponent,
  ],
  exports: [
    IssuesRoadmapComponent,
    IssuesFieldsTableComponent,
    IssuesLabelsTableComponent,
  ],
})
export class FeatureRoadmapModule {}
