import { NgModule } from '@angular/core';

// Provide shared module.
import { SharedModule } from '@pinguin/shared';

// Provide `UI` modules for feature.
import { UiCardModule } from '@pinguin/ui-card';
import { UiButtonModule } from '@pinguin/ui-button';
import { UiInputModule } from '@pinguin/ui-input';

// Provide locale components.
import { IssueCardFormComponent } from './components/issue-card-form';
import { IssueCardDialogComponent } from './components/issue-card-dialog';
import { IssuesCardListComponent } from './components/issues-card-list';

import { FeatureIssuesRoutingModule } from './feature-issues-routing.module';

// Feature store module.
import { IssuesStoreModule } from './store';
import { OverlayModule } from '@pinguin/overlay';
import { FeatureRoadmapModule } from '@pinguin/feature-roadmap';

@NgModule({
  imports: [
    // Provide shared module.
    SharedModule.forRoot(),

    OverlayModule.forRoot(),

    // Provide store module.
    IssuesStoreModule,

    FeatureRoadmapModule,

    // Provide routing module.
    FeatureIssuesRoutingModule,

    // Provide UI-dynamic modules.
    UiCardModule,
    UiInputModule,
    UiButtonModule,
  ],
  declarations: [
    // Provide components of feature.
    IssueCardFormComponent,
    IssueCardDialogComponent,
    IssuesCardListComponent,
  ],
  providers: [],
})
export class FeatureIssuesModule {}
