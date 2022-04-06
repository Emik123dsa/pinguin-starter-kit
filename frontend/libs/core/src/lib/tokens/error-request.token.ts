import { HttpInterceptor } from '@angular/common/http';
import { InjectionToken } from '@angular/core';

export const ERROR_REQUEST_INTERCEPTOR: InjectionToken<HttpInterceptor[]> =
  new InjectionToken<Array<HttpInterceptor>>('ERROR_REQUEST_INTERCEPTOR');
