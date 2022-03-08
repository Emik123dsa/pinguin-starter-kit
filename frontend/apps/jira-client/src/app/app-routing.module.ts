import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { StringUtils } from '@pinguin/utils';
import { DASHBOARD_MODULE_INITIALIZER } from '@pinguin/core';

import { QuicklinkStrategy } from 'ngx-quicklink';

const routingConfig: ExtraOptions = {
  scrollOffset: [0, 0],
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  initialNavigation: 'enabledNonBlocking',
  paramsInheritanceStrategy: 'always',
  // enableTracing: Object.is(environment.production, false),
  preloadingStrategy: QuicklinkStrategy,
  relativeLinkResolution: 'legacy',
};

const routes: Routes = [
  {
    path: 'home',
    data: { preload: true },
    loadChildren: () =>
      import('@pinguin/feature-home').then(
        (module) => module.FeatureHomeModule,
      ),
  },
  {
    path: 'dashboard',
    data: { preload: true },
    canLoad: [DASHBOARD_MODULE_INITIALIZER],
    loadChildren: () =>
      import('@pinguin/feature-dashboard').then(
        (module) => module.FeatureDashboardModule,
      ),
  },
  {
    path: StringUtils.EMPTY,
    data: { preload: false },
    loadChildren: () =>
      import('@pinguin/feature-errors').then(
        (module) => module.FeatureErrorsModule,
      ),
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
