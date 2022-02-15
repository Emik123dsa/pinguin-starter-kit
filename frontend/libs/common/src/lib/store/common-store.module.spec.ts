import { waitForAsync, TestBed } from '@angular/core/testing';
import { CommonStoreModule } from './common-store.module';

describe('CommonStoreModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonStoreModule],
      }).compileComponents();
    }),
  );

  it('should create an instance of CommonStoreModule', () => {
    expect(CommonStoreModule).toBeDefined();
  });
});
