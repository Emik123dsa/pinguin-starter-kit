import { ClassProvider } from '@angular/core';
import { IssuesRoadmapFacade } from '@pinguin/feature-issues';

/**
 * Issues roadmap facade provided in view.
 *
 * @type {ClassProvider}
 */
export const ISSUES_ROADMAP_FACADE_PROVIDER: ClassProvider = {
  multi: false,
  provide: IssuesRoadmapFacade,
  useClass: IssuesRoadmapFacade,
};
