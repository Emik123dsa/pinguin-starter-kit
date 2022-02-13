import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-roadmap-card-footer',
  exportAs: 'pinguinRoadmapCardFooter',
  host: { 'class': 'pinguin-roadmap-card-footer' },
  templateUrl: './roadmap-card-footer.component.html',
  styleUrls: ['./roadmap-card-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoadmapCardFooterComponent {}
