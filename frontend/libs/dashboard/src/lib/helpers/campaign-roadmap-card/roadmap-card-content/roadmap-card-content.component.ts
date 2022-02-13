import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-roadmap-card-content',
  exportAs: 'pinguinRoadmapCardContent',
  host: { 'class': 'pinguin-roadmap-card-content' },
  templateUrl: './roadmap-card-content.component.html',
  styleUrls: ['./roadmap-card-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoadmapCardContentComponent {}
