import { ClassProvider, FactoryProvider, Provider } from '@angular/core';

import {
  ApiGatewayService,
  BASE_API_GATEWAY_REQUEST_INTERCEPTOR,
  BASE_API_GATEWAY_REQUEST_PROVIDER,
} from '@pinguin/api';

import { ApiGatewayRequestInterceptor } from '../interceptors';
import { RxApiGatewayService } from '../services';

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
  BASE_API_GATEWAY_REQUEST_PROVIDER,
  API_GATEWAY_REQUEST_PROVIDER,
  API_GATEWAY_SERVICE_PROVIDER,
];
