import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExistingProvider } from '@angular/core';

import { API_GATEWAY_REQUEST_INTERCEPTOR } from '../tokens';

// ExistingProvider as an existing provider for HttpRequest.
export const API_GATEWAY_REQUEST_INTERCEPTOR_PROVIDER: ExistingProvider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: API_GATEWAY_REQUEST_INTERCEPTOR,
  multi: true,
};
