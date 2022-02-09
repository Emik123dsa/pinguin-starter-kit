import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './containers/dashboard-layout/dashboard-layout.component';
// import { RoadmapsComponent } from './containers/roadmaps/roadmaps.component';
// import { RoadmapsPageComponent } from './roadmaps-page/roadmaps-page.component';
// import { CampaignRoadmapComponent } from './campaign-roadmap/campaign-roadmap.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DashboardLayoutComponent,
    // RoadmapsComponent,
    // RoadmapsPageComponent,
    // CampaignRoadmapComponent
  ],
})
export class DashboardModule {
  public constructor() {
    console.log(' ');
  }
}
