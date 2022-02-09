import { waitForAsync, TestBed } from '@angular/core/testing';
import { AppBaseModule } from './app-base.module';

describe('AppBaseModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [AppBaseModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(AppBaseModule).toBeDefined();
  });
});
