import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-roadmap-card-header',
  exportAs: 'pinguinRoadmapCardHeader',
  host: { 'class': 'pinguin-roadmap-card-header' },
  templateUrl: './roadmap-card-header.component.html',
  styleUrls: ['./roadmap-card-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoadmapCardHeaderComponent {}
