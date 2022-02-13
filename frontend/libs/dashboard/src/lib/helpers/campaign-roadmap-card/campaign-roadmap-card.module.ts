import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadmapCardHeaderComponent } from './roadmap-card-header';
import { RoadmapCardContentComponent } from './roadmap-card-content';
import { RoadmapCardFooterComponent } from './roadmap-card-footer/roadmap-card-footer.component';
import { CampaignRoadmapCardComponent } from './campaign-roadmap-card.component';

@NgModule({
  declarations: [
    CampaignRoadmapCardComponent,
    RoadmapCardHeaderComponent,
    RoadmapCardContentComponent,
    RoadmapCardFooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    CampaignRoadmapCardComponent,
    RoadmapCardHeaderComponent,
    RoadmapCardContentComponent,
    RoadmapCardFooterComponent,
  ],
})
export class CampaignRoadmapCardModule {}
