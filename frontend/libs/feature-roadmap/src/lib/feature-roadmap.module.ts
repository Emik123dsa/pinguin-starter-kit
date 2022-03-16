import { NgModule } from '@angular/core';
import { SharedModule } from '@pinguin/shared';
import { IssuesStoreModule } from '@pinguin/feature-issues';
import { IssuesContainerComponent } from './containers/issues-container';
import { IssuesFieldsTableComponent } from './components/issues-fields-table';
import { IssuesLabelsTableComponent } from './components/issues-labels-table';
import { IssuesRoadmapComponent } from './components/issues-roadmap/issues-roadmap.component';

@NgModule({
  imports: [SharedModule.forRoot(), IssuesStoreModule],
  declarations: [
    IssuesContainerComponent,
    IssuesFieldsTableComponent,
    IssuesLabelsTableComponent,
    IssuesRoadmapComponent,
  ],
  exports: [
    IssuesContainerComponent,
    IssuesFieldsTableComponent,
    IssuesLabelsTableComponent,
  ],
})
export class FeatureRoadmapModule {}
