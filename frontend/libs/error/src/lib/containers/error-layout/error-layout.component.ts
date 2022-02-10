/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from '@pinguin/animations';

@Component({
  selector: 'pinguin-error-layout',
  templateUrl: './error-layout.component.html',
  styleUrls: ['./error-layout.component.scss'],
  animations: [routeAnimations],
})
export class ErrorLayoutComponent {
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
  public prepareClientErrorRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
