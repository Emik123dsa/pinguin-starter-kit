import { inject, InjectionToken } from '@angular/core';
import { ClientRestApiConfigRef } from '../rest-api.config-ref';

function baseRestApiUrlProviderFactory(): string {
  const apiConfigRef: ClientRestApiConfigRef = inject(ClientRestApiConfigRef);
  const { href: baseApiUrl } = apiConfigRef.getBaseUrl();
  return baseApiUrl;
}

export const BASE_API_URL = new InjectionToken('BASE_API_URL', {
  providedIn: 'root',
  factory: baseRestApiUrlProviderFactory,
});
