import { waitForAsync, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ClientErrorModule } from './error.module';

describe('AppBrowserModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          BrowserAnimationsModule,
          RouterTestingModule,
          ClientErrorModule,
        ],
      }).compileComponents();
    }),
  );

  it('should create', () => {
    expect(ClientErrorModule).toBeDefined();
  });
});
