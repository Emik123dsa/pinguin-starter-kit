import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-roadmap-page',
  exportAs: 'pinguinRoadmapPage',
  templateUrl: './roadmap-page.component.html',
  styleUrls: ['./roadmap-page.component.scss'],
  host: { 'class': 'pinguin-roadmap-page' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoadmapPageComponent {}
