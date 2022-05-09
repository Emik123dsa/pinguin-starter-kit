import { waitForAsync, TestBed } from '@angular/core/testing';
import { UiCardModule } from './card.module';

describe('UiCardModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [UiCardModule],
      }).compileComponents();
    }),
  );

  it('should create an instance of UiCardModule', () => {
    expect(UiCardModule).toBeDefined();
  });
});
