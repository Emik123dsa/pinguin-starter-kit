import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './containers/dashboard-layout/dashboard-layout.component';
import { RoadmapsPageComponent } from './containers/roadmaps-page/roadmaps-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    data: {
      title: 'Dashboard',
      depth: 1,
      animation: 'DashboardLayout',
      roles: [],
    },
    children: [
      {
        path: 'roadmaps',
        component: RoadmapsPageComponent,
        data: {
          title: 'Campaign Roadmap',
          depth: 2,
          animation: 'DashboardRoadmapsPage',
        },
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'roadmaps',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
