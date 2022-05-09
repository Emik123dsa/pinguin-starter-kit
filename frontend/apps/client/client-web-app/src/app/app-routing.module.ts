/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { StringUtils } from '@pinguin/utils';
import { DASHBOARD_MODULE_INITIALIZER } from '@pinguin/core';

import { QuicklinkStrategy } from 'ngx-quicklink';

const routingConfig: ExtraOptions = {
  useHash: false,
  scrollOffset: [0, 0],
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  initialNavigation: 'enabledBlocking',
  paramsInheritanceStrategy: 'always',
  // enableTracing: Object.is(environment.production, false),
  preloadingStrategy: QuicklinkStrategy,
  relativeLinkResolution: 'corrected',
};

const routes: Routes = [
  {
    path: StringUtils.EMPTY,
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'home',
    data: { preload: true },
    loadChildren: (): Promise<any> =>
      import('@pinguin/home').then((module) => module.HomeModule),
  },
  {
    path: 'dashboard',
    data: { preload: true },
    canLoad: [DASHBOARD_MODULE_INITIALIZER],
    loadChildren: (): Promise<any> =>
      import('@pinguin/dashboard').then((module) => module.DashboardModule),
  },
  {
    path: StringUtils.EMPTY,
    pathMatch: 'full',
    data: { preload: false },
    loadChildren: (): Promise<any> =>
      import('@pinguin/errors').then((module) => module.FeatureErrorsModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfig)],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
