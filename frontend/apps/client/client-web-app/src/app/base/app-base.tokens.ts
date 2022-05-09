import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const APP_BROWSER_INITIALIZER = new InjectionToken<
  readonly (() => Observable<unknown> | Promise<unknown> | void)[]
>('BROWSER_APP_INITIALIZER');

export const APP_SERVER_INITIALIZER = new InjectionToken<
  readonly (() => Observable<unknown> | Promise<unknown> | void)[]
>('SERVER_APP_INITIALIZER');
