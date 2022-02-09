import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { environment } from '../environments/environment';

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
    loadChildren: () =>
      import('@pinguin/dashboard').then((module) => module.DashboardModule),
  },
  {
    path: 'error',
    data: {
      title: 'Error',
      preload: false,
    },
    loadChildren: () =>
      import('@pinguin/error').then((module) => module.ErrorModule),
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
      enableTracing: environment.production,
      preloadingStrategy: QuicklinkStrategy,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
