import { APP_BASE_HREF } from '@angular/common';
import { ValueProvider } from '@angular/core';
import { Request } from 'express';

export const APP_SERVER_BASE_HREF_PROVIDER: (
  request: Request,
) => ValueProvider = (request: Request) => ({
  provide: APP_BASE_HREF,
  useValue: request.baseUrl,
  multi: false,
});
