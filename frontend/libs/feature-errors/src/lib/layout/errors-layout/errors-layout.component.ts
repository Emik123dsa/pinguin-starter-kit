/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from '@pinguin/animations';

@Component({
  selector: 'pinguin-errors-layout',
  templateUrl: './errors-layout.component.html',
  styleUrls: ['./errors-layout.component.scss'],
  animations: [routeAnimation],
  host: { 'class': 'pinguin-errors-layout' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorsLayoutComponent {
  /**
   * Handle activated router events.
   *
   * @param  {unknown} event
   * @return {void}
   * @memberof AppComponent
   */
  public handleActivateEvent(event: unknown): void {
    // Handle activate events.
  }

  /**
   * Handle detached router events.
   *
   * @param  {unknown} event
   * @return {void}
   * @memberof AppComponent
   */
  public handleDetachEvent(event: unknown): void {
    // Handle detach events.
  }

  /**
   * Handle deactivated router events.
   *
   * @param  {unknown} event
   * @return {void}
   * @memberof AppComponent
   */
  public handleDeactivateEvent(event: unknown): void {
    // Handle deactivate events.
  }

  /**
   * Prepare router outlet from
   * activated `routeData` animation.
   *
   * @param  {RouterOutlet} outlet
   * @return
   * @memberof AppComponent
   */
  public prepareOutletRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['depth'];
  }
}
