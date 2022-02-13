import { TestBed } from '@angular/core/testing';

import { DASHBOARD_MODULE_INITIALIZER } from '../tokens';
import { DASHBOARD_MODULE_INITIALIZER_PROVIDER } from '../providers';
import { DashboardModuleInitializerService } from './dashboard-module-initializer.service';

describe('DashboardModuleInitializerService', () => {
  let service: DashboardModuleInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DASHBOARD_MODULE_INITIALIZER_PROVIDER],
    });

    service = TestBed.inject(
      DASHBOARD_MODULE_INITIALIZER,
    ) as DashboardModuleInitializerService;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
