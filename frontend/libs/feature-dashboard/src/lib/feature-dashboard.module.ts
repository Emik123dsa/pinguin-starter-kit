import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Provide shared modules.
import { SharedModule } from '@pinguin/shared';

// Provide components and containers components.
import { DashboardLayoutComponent } from './containers/dashboard-layout';
import { RoadmapPageComponent } from './containers/roadmap-page';

import { DashboardStoreModule } from './store';

// Provide UI modules.
import { UiCardModule } from '@pinguin/ui-card';
import { UiInputModule } from '@pinguin/ui-input';
import { UiButtonModule } from '@pinguin/ui-button';
import { UiOverlaysModule } from '@pinguin/ui-overlays';

// Provide feature routing module.
import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';

// Provide locale components.
import { IssueCardFormComponent } from './components/issue-card-form';
import { IssueCardListComponent } from './components/issue-card-list';
import { IssuesRoadmapComponent } from './components/issues-roadmap';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    DashboardStoreModule.forRoot(),
    FeatureDashboardRoutingModule,

    // Provide UI-dynamic modules.
    UiCardModule,
    UiButtonModule,
    UiInputModule,
    UiOverlaysModule,
  ],
  declarations: [
    DashboardLayoutComponent,
    RoadmapPageComponent,
    IssuesRoadmapComponent,
    IssueCardFormComponent,
    IssueCardListComponent,
  ],
  providers: [],
})
export class FeatureDashboardModule {
  public constructor(private readonly route: ActivatedRoute) {
    // Constructs dashboard client module.
    // TODO: should be implemented store$ initialization in constructor?
    // Currently invoked in the `canLoad` hook.
  }
}
