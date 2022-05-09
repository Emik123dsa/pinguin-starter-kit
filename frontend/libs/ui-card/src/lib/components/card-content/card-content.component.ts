import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-card-content',
  exportAs: 'pinguinCardContent',
  host: { 'class': 'pinguin-card-content' },
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContentComponent {}
