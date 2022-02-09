import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorLayoutComponent } from './containers/error-layout/error-layout.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorLayoutComponent,
    data: {
      title: 'Error',
      depth: 1,
      roles: null,
    },
    children: [
      {
        path: '404',
        component: NotFoundPageComponent,
        data: {
          title: 'Error | 404',
          depth: 2,
          animation: 'NotFoundPage',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
