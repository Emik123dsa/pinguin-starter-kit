import { HttpHeaders } from '@angular/common/http';
import { inject, InjectionToken } from '@angular/core';
import { ClientRestApiConfigRef } from '@pinguin/config';

function baseApiHttpRequestHeadersProviderFactory(): HttpHeaders {
  const apiConfigRef: ClientRestApiConfigRef = inject(ClientRestApiConfigRef);

  const httpHeaders: HttpHeaders = new HttpHeaders();

  void apiConfigRef.getHeaderMap().forEach((header: string, key: string) => {
    if (httpHeaders.has(key)) return;
    httpHeaders.append(key, header);
  });

  return httpHeaders;
}

export const BASE_API_HTTP_REQUEST_HEADERS: InjectionToken<HttpHeaders> =
  new InjectionToken<HttpHeaders>('BASE_API_HTTP_REQUEST_HEADERS', {
    providedIn: 'root',
    factory: baseApiHttpRequestHeadersProviderFactory,
  });
