import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Provide shared modules.
import { SharedModule } from '@pinguin/shared';
import { OverlayModule } from '@pinguin/overlay';

// Provide components and containers components.
import { DashboardLayoutComponent } from './layouts/dashboard-layout';

import { DashboardStoreModule } from './store';

// Provide feature routing module.
import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';

// Register all of the layer-facades.
import { OverviewContainerComponent } from './containers/overview-container/overview-container.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    OverlayModule.forRoot(),

    DashboardStoreModule.forRoot(),
    FeatureDashboardRoutingModule,
  ],
  declarations: [
    // Provide containers.
    DashboardLayoutComponent,
    // Provide components of containers.
    OverviewContainerComponent,
  ],
  providers: [],
})
export class FeatureDashboardModule {
  /**
   * Creates an instance of FeatureDashboardModule.
   *
   * @constructor
   * @public
   * @param {ActivatedRoute} route
   */
  public constructor(private readonly route: ActivatedRoute) {
    // Constructs dashboard client module.
    // TODO: should be implemented store$ initialization in constructor?
    // Currently invoked in the `canLoad` hook.
  }
}
