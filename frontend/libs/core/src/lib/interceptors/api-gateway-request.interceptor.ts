import { Inject, Injectable, Optional, Self, SkipSelf } from '@angular/core';
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
import { addLeadingSlash } from '@pinguin/utils';

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
    @Self() @Inject(BASE_API_URL) private readonly baseUrl: string,
    @Optional()
    @SkipSelf()
    @Inject(BASE_API_HTTP_REQUEST_HEADERS)
    private readonly baseHttpHeaders?: HttpHeaders,
    @Optional()
    @SkipSelf()
    @Inject(BASE_API_HTTP_REQUEST_QUERY_PARAMS)
    private readonly baseHttpQueryParams?: HttpParams,
  ) {}

  /**
   * Gets base url.
   *
   * @returns {string} base url
   */
  public getBaseUrl(): string {
    return this.baseUrl;
  }

  /**
   * Gets base http headers.
   *
   * @returns {HttpHeaders} as headers of http request.
   */
  public getBaseHttpHeaders(headers: HttpHeaders): HttpHeaders {
    return this.baseHttpHeaders as HttpHeaders;
  }

  /**
   * Gets base http query params.
   *
   * @returns {HttpParams} as query params of http request.
   */
  public getBaseHttpQueryParams(params: HttpParams): HttpParams {
    return this.baseHttpQueryParams as HttpParams;
  }

  /**
   * Intercepts api gateway request interceptor.
   *
   * @param  {HttpRequest<unknown>} request
   * @param  {HttpHandler} next
   * @return Observable<HttpEvent<unknown>>
   * @memberof ApiGatewayRequestInterceptor
   */
  public intercept<T>(
    request: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<T>> {
    let requestUrl: string;

    // Clone base api url from the request context.
    const baseUrl: string = this.getBaseUrl();

    if (baseUrl.indexOf(request.url) === -1) {
      requestUrl = baseUrl + addLeadingSlash(request.url);
    } else {
      requestUrl = request.url;
    }

    // Clone base http request to override current http handler.
    const baseHttpRequest: HttpRequest<unknown> = request.clone({
      url: requestUrl,
      params: this.getBaseHttpQueryParams(request.params),
      headers: this.getBaseHttpHeaders(request.headers),
    });

    return next.handle(baseHttpRequest);
  }
}
