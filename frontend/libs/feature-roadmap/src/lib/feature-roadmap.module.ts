import { NgModule } from '@angular/core';
import { SharedModule } from '@pinguin/shared';
import { IssuesRoadmapContainerComponent } from './containers/issues-roadmap-container';
import { IssuesFieldsTableComponent } from './components/issues-fields-table';
import { IssuesLabelsTableComponent } from './components/issues-labels-table';
import { IssuesRoadmapComponent } from './components/issues-roadmap';

@NgModule({
  imports: [SharedModule.forRoot()],
  declarations: [
    IssuesRoadmapContainerComponent,
    IssuesRoadmapComponent,
    IssuesFieldsTableComponent,
    IssuesLabelsTableComponent,
  ],
  exports: [
    IssuesRoadmapContainerComponent,
    IssuesRoadmapComponent,
    IssuesFieldsTableComponent,
    IssuesLabelsTableComponent,
  ],
})
export class FeatureRoadmapModule {}
