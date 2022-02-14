import { NgModule } from '@angular/core';

import { ClientSharedModule } from '@pinguin/shared';

import { DashboardRoutingModule } from './dashboard-routing.module';

// Provide components and containers components.
import { DashboardLayoutComponent } from './containers/dashboard-layout';
import { RoadmapsPageComponent } from './containers/roadmaps-page';
import { CampaignRoadmapComponent } from './components/campaign-roadmap';

// Provide UI modules.
import { UiCardModule } from '@pinguin/ui-card';
import { DashboardStoreModule } from './store';
import { Store } from '@ngrx/store';
import { IssuesEntityState } from './store';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  imports: [
    ClientSharedModule,
    DashboardStoreModule,
    DashboardRoutingModule,
    UiCardModule,
  ],
  declarations: [
    DashboardLayoutComponent,
    RoadmapsPageComponent,
    CampaignRoadmapComponent,
  ],
  providers: [],
})
export class DashboardModule {
  public constructor(private readonly route: ActivatedRoute) {
    // Constructs dashboard client module.
    // TODO: should be implemented store$ initialization in constructor?
    // Currently invoked in the `canLoad` hook.
    this.route.data.subscribe((data) => {
      console.log(data);
    });
  }
}
