import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-ui-card-header',
  exportAs: 'pinguinUiCardHeader',
  host: { 'class': 'pinguin-ui-card-header' },
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardHeaderComponent {}
