import { waitForAsync, TestBed } from '@angular/core/testing';
import { ClientCommonModule } from './common.module';

describe('ClientCommonModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ClientCommonModule],
      }).compileComponents();
    }),
  );

  it('should create an instance of ClientCommonModule', () => {
    expect(ClientCommonModule).toBeDefined();
  });
});
