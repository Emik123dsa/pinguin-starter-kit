import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesRoadmapContainerComponent } from '@pinguin/roadmap';
import { StringUtils } from '@pinguin/utils';

import { IssueDetailContainerComponent } from './containers/issue-detail-container';
import { IssueEditContainerComponent } from './containers/issue-edit-container';
import { IssuesContainerComponent } from './containers/issues-container';

const routes: Routes = [
  {
    path: StringUtils.EMPTY,
    component: IssuesContainerComponent,
    data: { title: 'Issues', depth: 3 },
  },
  {
    path: ':issueId',
    component: IssueDetailContainerComponent,
    data: { title: 'Issue', depth: 3 },
    children: [
      {
        path: 'edit',
        component: IssueEditContainerComponent,
        data: { title: 'Edit', depth: 3 },
      },
    ],
  },
  {
    path: 'v1',
    data: { title: 'Issues', depth: 3 },
    children: [
      {
        path: 'roadmap',
        component: IssuesRoadmapContainerComponent,
        data: { title: 'Roadmap' },
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'roadmap',
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'v1',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssuesRoutingModule {}
