import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-ui-card-content',
  exportAs: 'pinguinUiCardContent',
  host: { 'class': 'pinguin-ui-card-content' },
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardContentComponent {}
