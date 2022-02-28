import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Provide shared modules.
import { SharedModule } from '@pinguin/shared';
import { OverlayModule } from '@pinguin/overlay';

// Provide components and containers components.
import { DashboardLayoutComponent } from './containers/dashboard-layout';
import { RoadmapPageComponent } from './containers/roadmap-page';

import { DashboardStoreModule } from './store';

// Provide UI modules.
import { UiCardModule } from '@pinguin/ui-card';
import { UiInputModule } from '@pinguin/ui-input';
import { UiButtonModule } from '@pinguin/ui-button';

// Provide feature routing module.
import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';

// Provide locale components.
import { IssueCardFormComponent } from './components/issue-card-form';
import { IssueCardListComponent } from './components/issue-card-list';
import { IssuesRoadmapComponent } from './components/issues-roadmap';

// Register all of the layer-facades.
import { IssuesRoadmapFacade } from './facades';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    OverlayModule.forRoot(),

    DashboardStoreModule.forRoot(),
    FeatureDashboardRoutingModule,

    // Provide UI-dynamic modules.
    UiCardModule,
    UiButtonModule,
    UiInputModule,
  ],
  declarations: [
    DashboardLayoutComponent,
    RoadmapPageComponent,
    IssuesRoadmapComponent,
    IssueCardFormComponent,
    IssueCardListComponent,
  ],
  providers: [IssuesRoadmapFacade],
})
export class FeatureDashboardModule {
  public constructor(private readonly route: ActivatedRoute) {
    // Constructs dashboard client module.
    // TODO: should be implemented store$ initialization in constructor?
    // Currently invoked in the `canLoad` hook.
  }
}
