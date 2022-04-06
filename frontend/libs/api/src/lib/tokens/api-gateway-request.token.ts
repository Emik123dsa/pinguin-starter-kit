import { HttpInterceptor } from '@angular/common/http';
import { InjectionToken } from '@angular/core';

export const API_GATEWAY_REQUEST_INTERCEPTOR: InjectionToken<
  Array<HttpInterceptor>
> = new InjectionToken<Array<HttpInterceptor>>(
  'API_GATEWAY_REQUEST_INTERCEPTOR',
);
