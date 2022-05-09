import { ValueProvider } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';

export const APP_SERVER_REQUEST_PROVIDER = (
  request: Request,
): ValueProvider => ({
  provide: REQUEST,
  useValue: request,
  multi: false,
});
