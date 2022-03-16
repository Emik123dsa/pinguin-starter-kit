import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringUtils } from '@pinguin/utils';

// Provide any layouts and container of `feature-errors`.
import { ErrorsLayoutComponent } from './layouts/errors-layout';
import { NotFoundContainerComponent } from './containers/not-found-container';

const routes: Routes = [
  {
    path: StringUtils.EMPTY,
    component: ErrorsLayoutComponent,
    data: { title: '404', depth: 1, roles: null },
    children: [
      {
        path: '404',
        component: NotFoundContainerComponent,
        data: { title: 'Not Found', depth: 3 },
      },
      { path: '**', pathMatch: 'full', redirectTo: '404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorsRoutingModule {}
