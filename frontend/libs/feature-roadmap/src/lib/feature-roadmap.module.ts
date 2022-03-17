import { NgModule } from '@angular/core';
import { SharedModule } from '@pinguin/shared';

// Provide internal components for `feature-roadmap`.
import { IssuesFieldsTableComponent } from './components/issues-fields-table';
import { IssuesLabelsTableComponent } from './components/issues-labels-table';
import { IssuesRoadmapContainerComponent } from './containers/issues-roadmap-container/issues-roadmap-container.component';

@NgModule({
  imports: [SharedModule.forRoot()],
  declarations: [
    IssuesRoadmapContainerComponent,
    IssuesFieldsTableComponent,
    IssuesLabelsTableComponent,
  ],
  exports: [
    IssuesRoadmapContainerComponent,
    IssuesFieldsTableComponent,
    IssuesLabelsTableComponent,
  ],
})
export class FeatureRoadmapModule {}
