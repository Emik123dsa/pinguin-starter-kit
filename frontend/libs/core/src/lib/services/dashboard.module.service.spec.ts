import { TestBed } from '@angular/core/testing';

import { DASHBOARD_MODULE_INITIALIZER } from '../tokens';
import { DASHBOARD_MODULE_INITIALIZER_PROVIDER } from '../providers';
import { DashboardModuleService } from './dashboard.module.service';

describe('DashboardModuleService', () => {
  let service: DashboardModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DASHBOARD_MODULE_INITIALIZER_PROVIDER],
    });

    service = TestBed.inject(
      DASHBOARD_MODULE_INITIALIZER,
    ) as DashboardModuleService;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
