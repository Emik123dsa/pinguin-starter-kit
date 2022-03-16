import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routeAnimation } from '@pinguin/animations';

@Component({
  selector: 'pinguin-dashboard-layout',
  exportAs: 'pinguinDashboardLayout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  host: { 'class': 'pinguin-dashboard-layout' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimation],
})
export class DashboardLayoutComponent {
  /**
   * Prepare router outlet from
   * activated `routeData` animation.
   *
   * @param  {RouterOutlet} outlet
   * @return
   * @memberof AppComponent
   */
  public prepareOutletRoute(outlet: RouterOutlet): number {
    return outlet?.activatedRouteData?.['depth'];
  }
}
