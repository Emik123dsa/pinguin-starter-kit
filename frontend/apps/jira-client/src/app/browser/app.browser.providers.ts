import { ClassProvider } from '@angular/core';
import { BrowserService } from '@pinguin/common';
import { AppBrowserService } from './app.browser.service';

// ClassProvider for browser class provider.
export const APP_BROWSER_PROVIDER: ClassProvider = {
  provide: BrowserService,
  useClass: AppBrowserService,
  multi: false,
};
