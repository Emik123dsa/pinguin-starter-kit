import { waitForAsync, TestBed } from '@angular/core/testing';
import { CoreStoreModule } from './core-store.module';

describe('CoreStoreModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CoreStoreModule],
      }).compileComponents();
    }),
  );

  it('should create an instance of CoreStoreModule', () => {
    expect(CoreStoreModule).toBeDefined();
  });
});
