import { ClassProvider, Provider } from '@angular/core';

import { DASHBOARD_MODULE_INITIALIZER } from '../tokens';
import { DashboardModuleHandler } from '../handlers';

// ClassProvider for dashboard initializer.
export const DASHBOARD_MODULE_INITIALIZER_PROVIDER: ClassProvider = {
  provide: DASHBOARD_MODULE_INITIALIZER,
  useClass: DashboardModuleHandler,
  multi: false,
};

export const DASHBOARD_MODULE_PROVIDERS: Provider[] = [
  DASHBOARD_MODULE_INITIALIZER_PROVIDER,
];
