import { Store } from '@ngrx/store';
import { ClassProvider, FactoryProvider, Provider, Self } from '@angular/core';

import { CoreEntityState } from '../store';
import { IssuesModuleHandler } from '../handlers';
import { ISSUES_MODULE_INITIALIZER } from '../tokens';
import { IssuesModuleFacade } from '../services/facades';

// Provide issues module facade.
export const ISSUES_MODULE_FACADE_PROVIDER: FactoryProvider = {
  provide: IssuesModuleFacade,
  useFactory: (store: Store<CoreEntityState>) => new IssuesModuleFacade(store),
  deps: [[new Self(), Store]],
  multi: false,
};

// ClassProvider for dashboard initializer.
export const ISSUES_MODULE_INITIALIZER_PROVIDER: ClassProvider = {
  provide: ISSUES_MODULE_INITIALIZER,
  useClass: IssuesModuleHandler,
  multi: false,
};

export const ISSUES_MODULE_PROVIDERS: Provider[] = [
  ISSUES_MODULE_FACADE_PROVIDER,
  ISSUES_MODULE_INITIALIZER_PROVIDER,
];
