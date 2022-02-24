import {
  APP_INITIALIZER,
  FactoryProvider,
  PLATFORM_ID,
  Provider,
} from '@angular/core';

import { Observable } from 'rxjs';

import { BrowserService } from '@pinguin/common';
import {
  isPlatformBrowser,
  isPlatformWorkerApp,
  isPlatformWorkerUi,
} from '@angular/common';

import {
  APP_SERVER_INITIALIZER,
  APP_BROWSER_INITIALIZER,
} from './app-base.tokens';

// browserInitializerProviderFactory provider for factory.
export function browserInitializerProviderFactory(
  browserService: BrowserService,
  platformId: object,
): () => Observable<unknown> | Promise<unknown> | void {
  return (): void => {
    switch (true) {
      case isPlatformBrowser(platformId):
        return browserService.ngBrowserInit();
      case isPlatformWorkerApp(platformId):
        return browserService.ngBrowserInit();
      case isPlatformWorkerUi(platformId):
        return browserService.ngBrowserInit();
    }
  };
}

// serverInitializerProviderFactory provider for factory.
export function serverInitializerProviderFactory(): () =>
  | Observable<unknown>
  | Promise<unknown>
  | void {
  return () => {
    // TODO: implement server app initializing.
  };
}

const APP_BROWSER_PROVIDER: FactoryProvider = {
  provide: APP_BROWSER_INITIALIZER,
  useFactory: browserInitializerProviderFactory,
  deps: [BrowserService, PLATFORM_ID],
  multi: false,
};

const APP_SERVER_PROVIDER: FactoryProvider = {
  provide: APP_SERVER_INITIALIZER,
  useFactory: serverInitializerProviderFactory,
  deps: [BrowserService, PLATFORM_ID],
  multi: false,
};

export const APP_INITIALIZER_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useExisting: APP_SERVER_INITIALIZER,
    multi: true,
  },
  {
    provide: APP_INITIALIZER,
    useExisting: APP_BROWSER_INITIALIZER,
    multi: true,
  },
];

export const APP_BASE_PROVIDERS: Provider[] = [
  APP_SERVER_PROVIDER,
  APP_BROWSER_PROVIDER,
  APP_INITIALIZER_PROVIDERS,
];
