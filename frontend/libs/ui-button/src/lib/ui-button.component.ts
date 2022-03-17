import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'button[pinguin-ui-button]',
  exportAs: 'pinguinUiButton',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
  host: { 'class': 'pinguin-ui-button' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent {}
