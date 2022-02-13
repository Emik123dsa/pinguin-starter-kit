import { ClassProvider, Provider } from '@angular/core';

import {
  ApiGatewayService,
  BASE_API_GATEWAY_REQUEST_INTERCEPTOR,
} from '@pinguin/api';

import { RxApiGatewayService } from '../services';
import { ApiGatewayRequestInterceptor } from '../interceptors';

// ClassProvider to constructs an api gateway request interceptor.
export const API_GATEWAY_REQUEST_PROVIDER: ClassProvider = {
  provide: BASE_API_GATEWAY_REQUEST_INTERCEPTOR,
  useClass: ApiGatewayRequestInterceptor,
  multi: false,
};

// ClassProvider for api gateway service.
export const API_GATEWAY_SERVICE_PROVIDER: ClassProvider = {
  provide: ApiGatewayService,
  useClass: RxApiGatewayService,
  multi: false,
};

export const API_GATEWAY_REQUEST_PROVIDERS: Provider[] = [
  API_GATEWAY_REQUEST_PROVIDER,
  API_GATEWAY_SERVICE_PROVIDER,
];
