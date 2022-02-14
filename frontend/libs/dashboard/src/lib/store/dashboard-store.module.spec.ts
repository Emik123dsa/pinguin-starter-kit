import { waitForAsync, TestBed } from '@angular/core/testing';
import { DashboardStoreModule } from './dashboard-store.module';

describe('DashboardStoreModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [DashboardStoreModule],
      }).compileComponents();
    }),
  );

  it('should create an instance of DashboardStoreModule', () => {
    expect(DashboardStoreModule).toBeDefined();
  });
});
