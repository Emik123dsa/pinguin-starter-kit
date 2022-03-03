import { ClassProvider, Provider } from '@angular/core';

import { ISSUES_MODULE_INITIALIZER } from '../tokens';
import { IssuesModuleService } from '../services';

// ClassProvider for dashboard initializer.
export const ISSUES_MODULE_INITIALIZER_PROVIDER: ClassProvider = {
  provide: ISSUES_MODULE_INITIALIZER,
  useClass: IssuesModuleService,
  multi: false,
};

export const ISSUES_MODULE_PROVIDERS: Provider[] = [
  ISSUES_MODULE_INITIALIZER_PROVIDER,
];
