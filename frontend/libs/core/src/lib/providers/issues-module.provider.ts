import { ClassProvider, Provider } from '@angular/core';

import { IssuesModuleHandler } from '../handlers';
import { ISSUES_MODULE_INITIALIZER } from '../tokens';

// ClassProvider for dashboard initializer.
export const ISSUES_MODULE_INITIALIZER_PROVIDER: ClassProvider = {
  provide: ISSUES_MODULE_INITIALIZER,
  useClass: IssuesModuleHandler,
  multi: false,
};

export const ISSUES_MODULE_PROVIDERS: Provider[] = [
  ISSUES_MODULE_INITIALIZER_PROVIDER,
];
