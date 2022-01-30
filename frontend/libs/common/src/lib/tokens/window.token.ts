import { InjectionToken } from '@angular/core';

export const WINDOW: InjectionToken<Window & typeof globalThis> =
  new InjectionToken<Window & typeof globalThis>('CLIENT_WINDOW');
