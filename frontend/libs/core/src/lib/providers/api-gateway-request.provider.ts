import { ClassProvider, Provider } from '@angular/core';

import {
  ApiGatewayService,
  API_GATEWAY_REQUEST_INTERCEPTOR,
  IssueService,
} from '@pinguin/api';

import { ApiGatewayRequestInterceptor } from '../interceptors';
import { RxApiGatewayService, RxIssueService } from '../services';

// ClassProvider to constructs an api gateway request interceptor.
export const API_GATEWAY_REQUEST_PROVIDER: ClassProvider = {
  provide: API_GATEWAY_REQUEST_INTERCEPTOR,
  useClass: ApiGatewayRequestInterceptor,
  multi: false,
};

// ClassProvider for api gateway service.
export const API_GATEWAY_SERVICE_PROVIDER: ClassProvider = {
  provide: ApiGatewayService,
  useClass: RxApiGatewayService,
  multi: false,
};

export const ISSUES_SERVICE_PROVIDER: ClassProvider = {
  provide: IssueService,
  useClass: RxIssueService,
  multi: false,
};

export const API_GATEWAY_REQUEST_PROVIDERS: Provider[] = [
  API_GATEWAY_REQUEST_PROVIDER,
  API_GATEWAY_SERVICE_PROVIDER,
  ISSUES_SERVICE_PROVIDER,
];
