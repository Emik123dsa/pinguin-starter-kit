import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Provide shared modules.
import { SharedModule } from '@pinguin/shared';

// Provide components and containers components.
import { DashboardLayoutComponent } from './containers/dashboard-layout';
import { RoadmapsPageComponent } from './containers/roadmaps-page';
import { CampaignRoadmapComponent } from './components/campaign-roadmap';

import { DashboardStoreModule } from './store';

// Provide UI modules.
import { UiCardModule } from '@pinguin/ui-card';
import { UiInputModule } from '@pinguin/ui-input';
import { UiButtonModule } from '@pinguin/ui-button';
import { UiOverlayModule } from '@pinguin/ui-overlay';

import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    DashboardStoreModule.forRoot(),
    FeatureDashboardRoutingModule,

    // Provide UI-dynamic modules.
    UiCardModule,
    UiButtonModule,
    UiInputModule,
    UiOverlayModule,
  ],
  declarations: [
    DashboardLayoutComponent,
    RoadmapsPageComponent,
    CampaignRoadmapComponent,
  ],
  providers: [],
})
export class FeatureDashboardModule {
  public constructor(private readonly route: ActivatedRoute) {
    // Constructs dashboard client module.
    // TODO: should be implemented store$ initialization in constructor?
    // Currently invoked in the `canLoad` hook.
  }
}
