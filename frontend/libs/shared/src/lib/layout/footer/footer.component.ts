import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-layout-footer',
  exportAs: 'pinguinLayoutFooter',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterLayoutComponent {}
