import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClassProvider, ExistingProvider, Provider } from '@angular/core';

// Import all of the error request tokens and interceptors.
import { ERROR_REQUEST_INTERCEPTOR } from '../tokens';
import { ErrorRequestInterceptor } from '../interceptors';

export const ERROR_REQUEST_INTERCEPTOR_PROVIDER: ExistingProvider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: ERROR_REQUEST_INTERCEPTOR,
  multi: true,
};

export const ERROR_REQUEST_PROVIDER: ClassProvider = {
  provide: ERROR_REQUEST_INTERCEPTOR,
  useClass: ErrorRequestInterceptor,
  multi: false,
};

export const ERROR_REQUEST_PROVIDERS: Provider[] = new Array<Provider>(
  ERROR_REQUEST_INTERCEPTOR_PROVIDER,
  ERROR_REQUEST_PROVIDER,
);
