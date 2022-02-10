import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-roadmaps-page',
  exportAs: 'pinguinRoadmapsPage',
  templateUrl: './roadmaps-page.component.html',
  styleUrls: ['./roadmaps-page.component.scss'],
  host: {
    'class': 'pinguin-roadmaps-page',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoadmapsPageComponent {
  
}
