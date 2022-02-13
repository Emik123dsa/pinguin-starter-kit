import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Inject,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

@Component({
  selector: 'pinguin-campaign-roadmap-card',
  exportAs: 'pinguinCampaignRoadmapCard',
  templateUrl: './campaign-roadmap-card.component.html',
  styleUrls: ['./campaign-roadmap-card.component.scss'],
  host: {
    'class': 'pinguin-campaign-roadmap-card',
    '[class._pinguin-animation-noopable]': 'animationMode === "NoopAnimations"',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignRoadmapCardComponent {
  public constructor(
    @Optional()
    @Inject(ANIMATION_MODULE_TYPE)
    public readonly animationMode?: string,
  ) {}
}
