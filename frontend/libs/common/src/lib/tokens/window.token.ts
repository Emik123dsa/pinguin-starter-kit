import { InjectionToken } from '@angular/core';
import { CLIENT_WINDOW } from '../constants';

export const WINDOW: InjectionToken<Window & typeof globalThis> =
  new InjectionToken<Window & typeof globalThis>(CLIENT_WINDOW);
