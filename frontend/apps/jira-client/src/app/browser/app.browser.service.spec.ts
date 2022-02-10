import { TestBed } from '@angular/core/testing';

import { AppBrowserService } from './app.browser.service';

describe('AppBrowserService', () => {
  let service: AppBrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppBrowserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
