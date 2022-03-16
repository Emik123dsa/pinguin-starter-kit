import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FeatureRoadmapVersion,
  IssuesContainerComponent,
} from '@pinguin/feature-roadmap';

const routes: Routes = [
  {
    path: FeatureRoadmapVersion.V1,
    data: { title: 'Issues', depth: 3 },
    children: [
      {
        path: 'roadmap',
        component: IssuesContainerComponent,
        data: { title: 'Roadmap', version: FeatureRoadmapVersion.V1 },
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
    redirectTo: FeatureRoadmapVersion.V1,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureIssuesRoutingModule {}
