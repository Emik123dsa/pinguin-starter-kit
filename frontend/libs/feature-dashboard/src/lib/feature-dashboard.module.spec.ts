import { waitForAsync, TestBed } from '@angular/core/testing';
import { FeatureDashboardModule } from './feature-dashboard.module';

describe('FeatureDashboardModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FeatureDashboardModule],
      }).compileComponents();
    }),
  );

  it('should create an instance of FeatureDashboardModule', () => {
    expect(FeatureDashboardModule).toBeDefined();
  });
});
