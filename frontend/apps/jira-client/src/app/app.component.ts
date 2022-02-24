/* eslint-disable @typescript-eslint/no-unused-vars */
import { VERSION } from '@pinguin/core';
import {
  ChangeDetectionStrategy,
  Component,
  Version,
  ViewEncapsulation,
} from '@angular/core';

import { routeAnimations } from '@pinguin/animations';

@Component({
  selector: 'pinguin-client-root',
  exportAs: 'pinguinClientRoot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimations],
})
export class AppComponent {
  /**
   * Version  of app component.
   */
  public version: Version = VERSION;
}
