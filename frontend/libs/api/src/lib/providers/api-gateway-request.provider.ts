import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExistingProvider } from '@angular/core';

import { BASE_API_GATEWAY_REQUEST_INTERCEPTOR } from '../tokens';

// ExistingProvider as an existing provider for HttpRequest.
export const BASE_API_GATEWAY_REQUEST_PROVIDER: ExistingProvider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: BASE_API_GATEWAY_REQUEST_INTERCEPTOR,
  multi: true,
};
