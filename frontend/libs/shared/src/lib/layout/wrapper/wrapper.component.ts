import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-layout-wrapper',
  exportAs: 'pinguinLayoutWrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperLayoutComponent {}
