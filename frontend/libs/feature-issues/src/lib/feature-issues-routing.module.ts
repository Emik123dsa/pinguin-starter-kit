import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesRoadmapContainerComponent } from '@pinguin/feature-roadmap';

const routes: Routes = [
  {
    path: 'roadmap',
    data: { title: 'Roadmap', depth: 3 },
    component: IssuesRoadmapContainerComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'roadmap',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureIssuesRoutingModule {}
