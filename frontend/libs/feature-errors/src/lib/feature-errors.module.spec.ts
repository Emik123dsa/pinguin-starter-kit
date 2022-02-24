import { waitForAsync, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatureErrorsModule } from './feature-errors.module';

describe('FeatureErrorsModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          BrowserAnimationsModule,
          RouterTestingModule,
          FeatureErrorsModule,
        ],
      }).compileComponents();
    }),
  );

  it('should create', () => {
    expect(FeatureErrorsModule).toBeDefined();
  });
});
