import { InjectionToken } from '@angular/core';
import { DashboardModuleHandler } from '../handlers';

export const DASHBOARD_MODULE_INITIALIZER =
  new InjectionToken<DashboardModuleHandler>('DASHBOARD_MODULE_INITIALIZER');
