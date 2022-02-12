import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringUtils } from '@pinguin/common';
import { DASHBOARD_MODULE_INITIALIZER } from '@pinguin/dashboard';

import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: 'home',
    data: {
      title: 'Home',
      preload: false,
    },
    loadChildren: () =>
      import('@pinguin/home').then((module) => module.HomeModule),
  },
  {
    path: 'dashboard',
    data: {
      title: 'Dashboard',
      preload: true,
    },
    canLoad: [DASHBOARD_MODULE_INITIALIZER],
    loadChildren: () =>
      import('@pinguin/dashboard').then((module) => module.DashboardModule),
  },
  {
    path: StringUtils.EMPTY,
    data: {
      title: 'Error',
      preload: false,
    },
    loadChildren: () =>
      import('@pinguin/error').then((module) => module.ClientErrorModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'error',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledNonBlocking',
      paramsInheritanceStrategy: 'always',
      // enableTracing: Object.is(environment.production, false),
      preloadingStrategy: QuicklinkStrategy,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
