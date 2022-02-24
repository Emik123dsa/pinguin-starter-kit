import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsLayoutComponent } from './containers/errors-layout';
import { NotFoundPageComponent } from './containers/not-found-page';

const routes: Routes = [
  {
    path: '',
    component: ErrorsLayoutComponent,
    data: {
      title: 'Error',
      depth: 1,
      roles: null,
      animation: 'ClientErrorLayout',
    },
    children: [
      {
        path: '404',
        component: NotFoundPageComponent,
        data: {
          title: '404 | Not Found',
          depth: 2,
          animation: 'NotFoundPage',
        },
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorsRoutingModule {}
