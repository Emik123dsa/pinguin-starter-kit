import { ClassProvider, Provider } from '@angular/core';

import { DASHBOARD_MODULE_INITIALIZER } from '../tokens';
import { DashboardModuleService } from '../services';
import { DashboardModuleFacade } from '../facades';

// ClassProvider for dashboard initializer.
export const DASHBOARD_MODULE_INITIALIZER_PROVIDER: ClassProvider = {
  provide: DASHBOARD_MODULE_INITIALIZER,
  useClass: DashboardModuleService,
  multi: false,
};

export const DASHBOARD_MODULE_FACADE_PROVIDER: ClassProvider = {
  provide: DashboardModuleFacade,
  useClass: DashboardModuleFacade,
  multi: false,
};

export const DASHBOARD_MODULE_PROVIDERS: Provider[] = [
  DASHBOARD_MODULE_INITIALIZER_PROVIDER,
  DASHBOARD_MODULE_FACADE_PROVIDER,
];
