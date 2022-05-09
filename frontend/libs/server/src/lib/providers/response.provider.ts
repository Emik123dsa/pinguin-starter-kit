import { ValueProvider } from '@angular/core';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { Response } from 'express';

export const APP_SERVER_RESPONSE_PROVIDER = (
  response: Response,
): ValueProvider => ({
  provide: RESPONSE,
  useValue: response,
  multi: false,
});
