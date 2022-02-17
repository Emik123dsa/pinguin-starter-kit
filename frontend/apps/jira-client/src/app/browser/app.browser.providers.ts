import { APP_BASE_HREF } from '@angular/common';
import { ClassProvider, Provider, ValueProvider } from '@angular/core';
import { BrowserService } from '@pinguin/common';
import { AppBrowserService } from './app.browser.service';

// ClassProvider for browser class provider.
const APP_BROWSER_SERVICE_PROVIDER: ClassProvider = {
  provide: BrowserService,
  useClass: AppBrowserService,
  multi: false,
};

const APP_BROWSER_BASE_HREF_PROVIDER: ValueProvider = {
  provide: APP_BASE_HREF,
  useValue: location.href,
  multi: false,
};

export const APP_BROWSER_PROVIDERS: Provider[] = [
  APP_BROWSER_SERVICE_PROVIDER,
  APP_BROWSER_BASE_HREF_PROVIDER,
];
