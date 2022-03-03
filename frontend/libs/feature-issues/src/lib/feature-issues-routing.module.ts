import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadmapContainerComponent } from './containers/roadmap-container';

const routes: Routes = [
  {
    path: 'roadmap',
    data: { title: 'Roadmap', depth: 3 },
    component: RoadmapContainerComponent,
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
