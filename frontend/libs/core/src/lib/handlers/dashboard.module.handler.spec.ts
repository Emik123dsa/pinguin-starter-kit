import { TestBed } from '@angular/core/testing';

import { DASHBOARD_MODULE_INITIALIZER } from '../tokens';
import { DASHBOARD_MODULE_INITIALIZER_PROVIDER } from '../providers';
import { DashboardModuleHandler } from './dashboard.module.handler';

describe('DashboardModuleHandler', () => {
  let service: DashboardModuleHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DASHBOARD_MODULE_INITIALIZER_PROVIDER],
    });

    service = TestBed.inject(
      DASHBOARD_MODULE_INITIALIZER,
    ) as DashboardModuleHandler;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
