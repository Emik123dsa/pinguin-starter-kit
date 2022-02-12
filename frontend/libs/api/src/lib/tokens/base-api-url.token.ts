import { inject, InjectionToken } from '@angular/core';
import { ClientRestApiConfigRef } from '@pinguin/config';

function baseRestApiUrlProviderFactory(): string {
  const apiConfiggRef: ClientRestApiConfigRefstring = inject(ClientRestApiConfigRef);
  const { href: baseApiUrl } = apiConfigRef.getBaseUrl();
  return baseApiUrl;
}

export const BASE_API_URL = new InjectionToken('BASE_API_URL', {
  providedIn: 'root',
  factory: baseRestApiUrlProviderFactory,
});
