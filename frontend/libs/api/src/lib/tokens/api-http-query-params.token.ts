import { HttpParams } from '@angular/common/http';
import { inject, InjectionToken } from '@angular/core';
import { ClientRestApiConfigRef } from '@pinguin/config';

function baseApiHttpRequestQueryParamsProviderFactory(): HttpParams {
  const apiConfigRef: ClientRestApiConfigRef = inject(ClientRestApiConfigRef);

  const queryParams: HttpParams = new HttpParams();

  void apiConfigRef
    .getQueryParamMap()
    .forEach((queryParam: string, key: string) => {
      if (queryParams.has(key)) return;
      queryParams.append(key, queryParam);
    });

  return queryParams;
}

export const BASE_API_HTTP_REQUEST_QUERY_PARAMS: InjectionToken<HttpParams> =
  new InjectionToken<HttpParams>('BASE_API_REQUEST_QUERY_PARAMS', {
    providedIn: 'root',
    factory: baseApiHttpRequestQueryParamsProviderFactory,
  });
