import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routeAnimations } from '@pinguin/animations';
import { ApiGatewayService } from '@pinguin/api';

@Component({
  selector: 'pinguin-dashboard-layout',
  exportAs: 'pinguinDashboardLayout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  host: {
    'class': 'pinguin-dashboard-layout',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimations],
})
export class DashboardLayoutComponent {

  public constructor(private readonly apiGatewayService: ApiGatewayService) {

  }

  /**
   * Prepare router outlet from
   * activated `routeData` animation.
   *
   * @param  {RouterOutlet} outlet
   * @return
   * @memberof AppComponent
   */
  public prepareDashboardRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
