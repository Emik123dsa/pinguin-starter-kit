import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-ui-card-footer',
  exportAs: 'pinguinUiCardFooter',
  host: { 'class': 'pinguin-ui-card-footer' },
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardFooterComponent {}
