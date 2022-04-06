import { InjectionToken, NgModule } from '@angular/core';

export const ISSUES_SERVICE_ENTITY_PATH = new InjectionToken(
  'ISSUES_SERVICE_ENTITY_PATH',
  {
    providedIn: 'root',
    factory: () => 'issues',
  },
);

/**
 * Helper module for resolving mappers and facades
 * with tree-shaking features.
 *
 * @export
 * @class IssuesServiceModule
 * @typedef {IssuesServiceModule}
 */
@NgModule({
  exports: [],
})
export class IssuesServiceModule {}
