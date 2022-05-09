import { Request } from 'express';
import { APP_BASE_HREF } from '@angular/common';
import { FactoryProvider, Inject, Self, ValueProvider } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';

function requestBaseUrlFactory(request: Request) {
  return request.baseUrl;
}

export const APP_SERVER_BASE_HREF_PROVIDER: FactoryProvider = {
  provide: APP_BASE_HREF,
  useFactory: requestBaseUrlFactory,
  deps: [[new Self(), new Inject(REQUEST)]],
  multi: false,
};
