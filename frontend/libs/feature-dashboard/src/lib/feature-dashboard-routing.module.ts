import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardLayoutComponent } from './containers/dashboard-layout';
import { RoadmapPageComponent } from './containers/roadmap-page/roadmap-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    data: {
      title: 'Dashboard',
      animation: 'DashboardLayout',
      roles: [],
    },
    children: [
      {
        path: 'issues',
        children: [
          {
            path: 'roadmap',
            component: RoadmapPageComponent,
            data: {
              title: 'Issues Roadmap',
              // TODO: implement depth of animation: 2,
              animation: 'IssuesRoadmapPage',
            },
          },
        ],
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'issues/roadmap?pageType=issues',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureDashboardRoutingModule {}
