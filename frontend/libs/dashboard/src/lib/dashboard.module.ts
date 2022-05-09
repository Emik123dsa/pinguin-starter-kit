import { NgModule } from '@angular/core';

// Provide shared modules.
import { SharedModule } from '@pinguin/shared';
import { OverlayModule } from '@pinguin/overlay';

// Provide store module.
import { DashboardStoreModule } from './store';
// Provide feature routing module.
import { DashboardRoutingModule } from './dashboard-routing.module';
// Provide components and containers components.
import { DashboardLayoutComponent } from './layout/dashboard-layout';
// Register all of the layer-facades.
import { DashboardContainerComponent } from './containers/dashboard';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    OverlayModule.forRoot(),

    DashboardStoreModule.forRoot(),
    DashboardRoutingModule,
  ],
  providers: [],
  declarations: [
    // Provide containers.
    DashboardLayoutComponent,
    // Provide components of containers.
    DashboardContainerComponent,
  ],
})
export class DashboardModule {
  /**
   * Creates an instance of DashboardModule.
   *
   * @constructor
   * @public
   * @param {ConfigService} configService
   */
  public constructor() {
    // Constructs dashboard client module.
    // TODO: should be implemented store initialization in constructor?
    // Currently invoked in the `canLoad` hook.
  }
}
