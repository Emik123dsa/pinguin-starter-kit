import { HttpInterceptor } from '@angular/common/http';
import { InjectionToken } from '@angular/core';

export const BASE_API_GATEWAY_REQUEST_INTERCEPTOR: InjectionToken<
  Array<HttpInterceptor>
> = new InjectionToken<Array<HttpInterceptor>>(
  'BASE_API_GATEWAY_REQUEST_INTERCEPTOR',
);
