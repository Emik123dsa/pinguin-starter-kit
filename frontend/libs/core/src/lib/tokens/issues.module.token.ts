import { InjectionToken } from '@angular/core';
import { IssuesModuleHandler } from '../handlers';

export const ISSUES_MODULE_INITIALIZER =
  new InjectionToken<IssuesModuleHandler>('ISSUES_MODULE_INITIALIZER');
