import { NgModule } from '@angular/core';

import { ClientSharedModule } from '@pinguin/shared';

// Provide components and containers components.
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './containers/dashboard-layout';
import { RoadmapsPageComponent } from './containers/roadmaps-page';
import { CampaignRoadmapComponent } from './components/campaign-roadmap';

// Provide any helpers modules.
import { CampaignRoadmapCardModule } from './helpers/campaign-roadmap-card/campaign-roadmap-card.module';

@NgModule({
  imports: [
    ClientSharedModule,
    DashboardRoutingModule,
    CampaignRoadmapCardModule,
  ],
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
  }
}
