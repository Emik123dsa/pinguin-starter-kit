import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: '[pinguin-ui-button]',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
  host: { 'class': 'pinguin-ui-button' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent {}
