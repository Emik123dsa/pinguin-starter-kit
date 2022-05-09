/* eslint-disable @typescript-eslint/no-unused-vars */
import { VERSION } from '@pinguin/core';

import {
  ChangeDetectionStrategy,
  Component,
  Version,
  ViewEncapsulation,
  EventEmitter,
  Output,
} from '@angular/core';

import { routeAnimation } from '@pinguin/animations';

@Component({
  selector: 'pinguin-client-root',
  exportAs: 'pinguinClientRoot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimation],
})
export class AppComponent {
  /**
   * Version  of app component.
   */
  public version: Version = VERSION;
}
