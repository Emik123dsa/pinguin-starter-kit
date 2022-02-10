import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-campaign-roadmap',
  exportAs: 'pinguinCampaignRoadmap',
  templateUrl: './campaign-roadmap.component.html',
  styleUrls: ['./campaign-roadmap.component.scss'],
  host: {
    'class': 'pinguin-campaign-roadmap',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignRoadmapComponent {}
