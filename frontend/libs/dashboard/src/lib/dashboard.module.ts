import { NgModule } from '@angular/core';

import { DashboardLayoutComponent } from './containers/dashboard-layout/dashboard-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@pinguin/shared';

import { RoadmapsPageComponent } from './containers/roadmaps-page/roadmaps-page.component';
import { CampaignRoadmapComponent } from './components/campaign-roadmap/campaign-roadmap.component';

@NgModule({
  imports: [SharedModule, DashboardRoutingModule],
  declarations: [
    DashboardLayoutComponent,
    RoadmapsPageComponent,
    CampaignRoadmapComponent,
  ],
})
export class DashboardModule {}
