import { NgModule } from '@angular/core';

import { ClientSharedModule } from '@pinguin/shared';

// Provide components and containers components.
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './containers/dashboard-layout';
import { RoadmapsPageComponent } from './containers/roadmaps-page';
import { CampaignRoadmapComponent } from './components/campaign-roadmap';

// Provide UI modules.
import { UiCardModule } from '@pinguin/ui-card';

@NgModule({
  imports: [ClientSharedModule, DashboardRoutingModule, UiCardModule],
  declarations: [
    DashboardLayoutComponent,
    RoadmapsPageComponent,
    CampaignRoadmapComponent,
  ],
  providers: [],
})
export class DashboardModule {
  public constructor() {
    // Constructs dashboard client module.
    // TODO: should be implemented store$ initialization in constructor?
    // Currently invoked in the `canLoad` hook.
  }
}
