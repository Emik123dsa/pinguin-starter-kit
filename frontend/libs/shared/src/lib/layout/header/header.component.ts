import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-layout-header',
  exportAs: 'pinguinLayoutHeader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: { 'class': 'pinguin-layout-header' },

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLayoutComponent {}
