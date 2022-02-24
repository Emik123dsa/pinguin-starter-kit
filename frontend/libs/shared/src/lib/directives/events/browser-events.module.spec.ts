import { waitForAsync, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserEventsModule } from './browser-events.module';

describe('BrowserEventsModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          BrowserAnimationsModule,
          RouterTestingModule,
          BrowserEventsModule,
        ],
      }).compileComponents();
    }),
  );

  it('should create', () => {
    expect(BrowserEventsModule).toBeDefined();
  });
});
