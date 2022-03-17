import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ISSUES_MODULE_INITIALIZER } from '@pinguin/core';
import { StringUtils } from '@pinguin/utils';

// Provide containers pages.
import { DashboardLayoutComponent } from './layout/dashboard-layout';
import { OverviewContainerComponent } from './containers/overview-container';

const routes: Routes = [
  {
    path: StringUtils.EMPTY,
    component: DashboardLayoutComponent,
    data: { title: 'Dashboard', depth: 1, roles: [] },
    children: [
      {
        path: StringUtils.EMPTY,
        data: { title: 'Overview', depth: 2 },
        component: OverviewContainerComponent,
      },
      {
        path: 'issues',
        data: { title: 'Issues', depth: 2, preload: true },
        canLoad: [ISSUES_MODULE_INITIALIZER],
        loadChildren: () =>
          import('@pinguin/feature-issues').then(
            (module) => module.FeatureIssuesModule,
          ),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'issues',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureDashboardRoutingModule {}
