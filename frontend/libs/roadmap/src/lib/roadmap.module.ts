import { NgModule } from '@angular/core';
import { SharedModule } from '@pinguin/shared';

import { FeatureRoadmapCdkModule } from './roadmap-cdk.module';

// Provide internal components for `feature-roadmap`.
import { IssuesFieldsTableComponent } from './components/issues-fields-table';
import { IssuesLabelsTableComponent } from './components/issues-labels-table';
import { IssuesRoadmapComponent } from './containers/issues-roadmap';

// Provide internal containers for `feature-roadmap`.
import { IssuesRoadmapContainerComponent } from './containers/issues-roadmap-container';

@NgModule({
  imports: [SharedModule.forRoot(), FeatureRoadmapCdkModule.forRoot()],
  providers: [],
  declarations: [
    IssuesRoadmapComponent,
    IssuesFieldsTableComponent,
    IssuesLabelsTableComponent,
    IssuesRoadmapContainerComponent,
  ],
})
export class FeatureRoadmapModule {}
