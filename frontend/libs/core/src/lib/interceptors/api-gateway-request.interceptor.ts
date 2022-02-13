import { Inject, Injectable, Optional, Self } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  BASE_API_HTTP_REQUEST_HEADERS,
  BASE_API_HTTP_REQUEST_QUERY_PARAMS,
  BASE_API_URL,
} from '@pinguin/api';

@Injectable({
  providedIn: 'root',
})
export class ApiGatewayRequestInterceptor implements HttpInterceptor {
  /**
   * Constructs an instance of ApiGatewayRequestInterceptor.
   *
   * @param  {string} _baseUrl
   * @param  {HttpHeaders} _baseHttpHeaders
   * @param  {HttpParams} _baseHttpQueryParams
   * @memberof ApiGatewayRequestInterceptor
   */
  public constructor(
    @Optional()
    @Self()
    @Inject(BASE_API_URL)
    private readonly _baseUrl: string,
    @Optional()
    @Self()
    @Inject(BASE_API_HTTP_REQUEST_HEADERS)
    private readonly _baseHttpHeaders: HttpHeaders,
    @Optional()
    @Self()
    @Inject(BASE_API_HTTP_REQUEST_QUERY_PARAMS)
    private readonly _baseHttpQueryParams: HttpParams,
  ) {}

  /**
   * Gets base url.
   *
   * @returns {string} base url
   */
  public getBaseUrl(): string {
    return this._baseUrl;
  }

  /**
   * Gets base http headers.
   *
   * @returns {HttpHeaders} as headers of http request.
   */
  public getBaseHttpHeaders(): HttpHeaders {
    return this._baseHttpHeaders;
  }

  /**
   * Gets base http query params.
   *
   * @returns {HttpParams} as query params of http request.
   */
  public getBaseHttpQueryParams(): HttpParams {
    return this._baseHttpQueryParams;
  }

  /**
   * Intercepts api gateway request interceptor.
   *
   * @param  {HttpRequest<unknown>} request
   * @param  {HttpHandler} next
   * @return Observable<HttpEvent<unknown>>
   * @memberof ApiGatewayRequestInterceptor
   */
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    let baseApiUrl: string;
    // Clone base api url from the request context.
    const baseUrl: string = this.getBaseUrl();

    if (baseUrl.indexOf(request.url) === -1) {
      baseApiUrl = baseUrl + request.url;
    } else {
      baseApiUrl = request.url;
    }

    // Clone base http request to override current http handler.
    const baseHttpRequest: HttpRequest<unknown> = request.clone({
      url: baseApiUrl,
      headers: this.getBaseHttpHeaders(),
      params: this.getBaseHttpQueryParams(),
    });

    return next.handle(baseHttpRequest);
  }
}
