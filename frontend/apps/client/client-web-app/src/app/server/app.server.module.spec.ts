import { waitForAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppServerModule } from './app.server.module';

import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
describe('AppServerModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          BrowserAnimationsModule,
          NoopAnimationsModule,
          RouterTestingModule,
          AppServerModule,
        ],
      }).compileComponents();
    }),
  );

  it('should create', () => {
    expect(AppServerModule).toBeDefined();
  });
});
