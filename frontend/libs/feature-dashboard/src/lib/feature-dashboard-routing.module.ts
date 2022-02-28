import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './containers/dashboard-layout';
import { RoadmapPageComponent } from './containers/roadmap-page';

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
        path: 'roadmap',
        component: RoadmapPageComponent,

        data: {
          title: 'Roadmap',
          depth: 2,
          animation: 'DashboardRoadmapPage',
        },
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'roadmap',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureDashboardRoutingModule {}
