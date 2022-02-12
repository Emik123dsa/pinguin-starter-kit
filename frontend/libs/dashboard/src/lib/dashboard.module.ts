import { NgModule } from '@angular/core';

import { ClientSharedModule } from '@pinguin/shared';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './containers/dashboard-layout';
import { RoadmapsPageComponent } from './containers/roadmaps-page';
import { CampaignRoadmapComponent } from './components/campaign-roadmap';

@NgModule({
  imports: [ClientSharedModule, DashboardRoutingModule],
  declarations: [
    DashboardLayoutComponent,
    RoadmapsPageComponent,
    CampaignRoadmapComponent,
  ],
  providers: [],
})
export class DashboardModule {}
