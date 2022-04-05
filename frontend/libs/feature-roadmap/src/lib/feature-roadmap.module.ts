import { NgModule } from '@angular/core';
import { SharedModule } from '@pinguin/shared';

// Provide internal components for `feature-roadmap`.
import { IssuesFieldsTableComponent } from './components/issues-fields-table';
import { IssuesLabelsTableComponent } from './components/issues-labels-table';
import { IssuesRoadmapComponent } from './components/issues-roadmap';

// Provide internal containers for `feature-roadmap`.
import { IssuesRoadmapContainerComponent } from './containers/issues-roadmap-container';

@NgModule({
  imports: [SharedModule.forRoot()],
  providers: [],
  declarations: [
    IssuesRoadmapComponent,
    IssuesFieldsTableComponent,
    IssuesLabelsTableComponent,
    IssuesRoadmapContainerComponent,
  ],
})
export class FeatureRoadmapModule {}
