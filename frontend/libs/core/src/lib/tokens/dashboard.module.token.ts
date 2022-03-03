import { InjectionToken } from '@angular/core';
import { DashboardModuleService } from '../services';

export const DASHBOARD_MODULE_INITIALIZER =
  new InjectionToken<DashboardModuleService>('DASHBOARD_MODULE_INITIALIZER');
