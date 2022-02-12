/* eslint-disable @typescript-eslint/no-unused-vars */
import { VERSION } from '@pinguin/core';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  TemplateRef,
  Version,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from '@pinguin/animations';

import { WINDOW } from '@pinguin/common';

@Component({
  selector: 'pinguin-jira-client-root',
  exportAs: 'pinguinJiraClientRoot',
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
