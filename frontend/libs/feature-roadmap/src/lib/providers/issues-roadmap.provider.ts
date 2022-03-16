import { ClassProvider } from '@angular/core';
import { IssuesRoadmapFacade } from '../services';

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
