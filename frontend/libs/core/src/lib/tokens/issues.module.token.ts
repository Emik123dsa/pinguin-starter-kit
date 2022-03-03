import { InjectionToken } from '@angular/core';
import { DashboardModuleService } from '../services';

export const ISSUES_MODULE_INITIALIZER =
  new InjectionToken<DashboardModuleService>('ISSUES_MODULE_INITIALIZER');
