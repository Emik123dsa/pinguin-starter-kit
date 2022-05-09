import { waitForAsync, TestBed } from '@angular/core/testing';
import { IssuesStoreModule } from './issues-store.module';

describe('IssuesStoreModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [IssuesStoreModule],
      }).compileComponents();
    }),
  );

  it('should create an instance of IssuesStoreModule', () => {
    expect(IssuesStoreModule).toBeDefined();
  });
});
