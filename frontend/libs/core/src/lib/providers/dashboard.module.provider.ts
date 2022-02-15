import { ClassProvider } from '@angular/core';

import { DASHBOARD_MODULE_INITIALIZER } from '../tokens';
import { DashboardModuleService } from '../services';

// ClassProvider for dashboard initializer.
export const DASHBOARD_MODULE_INITIALIZER_PROVIDER: ClassProvider = {
  provide: DASHBOARD_MODULE_INITIALIZER,
  useClass: DashboardModuleService,
  multi: false,
};
