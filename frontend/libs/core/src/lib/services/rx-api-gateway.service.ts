import {
  HttpBackend,
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpStatusCode,
} from '@angular/common/http';

import {
  Inject,
  Injectable,
  Optional as OptionalInject,
  Self,
} from '@angular/core';

import { catchError, Observable, OperatorFunction, throwError } from 'rxjs';

import {
  ApiGatewayErrorException,
  ApiGatewayService,
  ClientRestApiConfigRef,
  UnknownApiErrorException,
} from '@pinguin/api';
import { PlainObjectLiteral } from '@pinguin/utils';
import { ClientEnvironment, ENVIRONMENT } from '@pinguin/environments';

@Injectable({
  providedIn: 'root',
})
export class RxApiGatewayService extends ApiGatewayService {
  /**
   * Creates an instance of rx api gateway service.
   *
   * @constructor
   * @public
   * @param {ClientEnvironment} environment
   * @param {HttpClient} httpClient
   */
  public constructor(
    private readonly httpClient: HttpClient,
    // Inject optionally `HttpBackend` for initialize `HttpClient` without interceptors.
    @Self()
    @OptionalInject()
    private readonly httpBackend: HttpBackend,
    @Self()
    @Inject(ENVIRONMENT)
    private readonly environment: ClientEnvironment,
    private readonly restConfigRef: ClientRestApiConfigRef,
  ) {
    super();
  }

  /**
   * Handle http client errors with {@link HttpClient} backend-client.
   *
   * @protected
   * @template T
   * @param {(HttpErrorResponse & T)} error
   * @param {?Observable<T>} [caught]
   * @returns {*} a handled error as reactive subject.
   */
  protected handleHttpClientError<T>(
    error: HttpErrorResponse & T,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    caught?: Observable<T>,
  ): Observable<never> {
    return throwError((): Error | string => {
      if (!error.ok) {
        if (
          Object.is(error.statusText, 'OK') &&
          Object.is(error.status, HttpStatusCode.Ok)
        ) {
          // Throw api gateway error exception.
          return new ApiGatewayErrorException(error.statusText);
        }

        if (
          Object.is(error.status, 0) &&
          Object.is(error.statusText, 'Unknown Error')
        ) {
          // Throw unknown api error exception.
          return new UnknownApiErrorException(error.statusText);
        }
      }

      const fallbackErrorCode = 'Unknown Api Gateway Error Exception';
      // Throw any api gateway error exception.
      return error.error || fallbackErrorCode;
    });
  }

  /**
   * Serialize context request to the string.
   *
   * @private
   * @param {?PlainObjectLiteral} [body]
   * @returns {*}
   */
  protected serialize(body?: PlainObjectLiteral): Optional<string> {
    return this.restConfigRef.getSerializer()(body as PlainObjectLiteral);
  }

  /**
   * GET reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param path of url string of get request.
   * @param [params] default params to payload.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public override get<T>(
    url: string,
    params: HttpParams = new HttpParams(),
  ): Observable<T> {
    return this.httpClient
      .get<T>(url, {
        params,
        withCredentials: Object.is(
          this.environment,
          ClientEnvironment.Production,
        ),
      })
      .pipe(
        catchError(this.handleHttpClientError as OperatorFunction<unknown, T>),
      );
  }

  /**
   * POST reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param url of url string of get request.
   * @param [params] default params to payload.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public override post<T>(
    url: string,
    body?: PlainObjectLiteral,
  ): Observable<T> {
    return this.httpClient
      .post<T>(url, this.serialize(body), {
        withCredentials: Object.is(
          this.environment,
          ClientEnvironment.Production,
        ),
      })
      .pipe(
        catchError(this.handleHttpClientError as OperatorFunction<unknown, T>),
      );
  }

  /**
   * PUT reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param url of url string of get request.
   * @param [params] default params to payload.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public override put<T>(
    url: string,
    body?: PlainObjectLiteral,
  ): Observable<T> {
    return this.httpClient
      .put<T>(url, this.serialize(body), {
        withCredentials: Object.is(
          this.environment,
          ClientEnvironment.Production,
        ),
      })
      .pipe(
        catchError(this.handleHttpClientError as OperatorFunction<unknown, T>),
      );
  }

  /**
   * PATCH reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param url of url string of get request.
   * @param [params] default params to payload.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public override patch<T>(
    url: string,
    params: HttpParams = new HttpParams(),
  ): Observable<T> {
    return this.httpClient
      .patch<T>(url, {
        params,
        withCredentials: Object.is(
          this.environment,
          ClientEnvironment.Production,
        ),
      })
      .pipe(
        catchError(this.handleHttpClientError as OperatorFunction<unknown, T>),
      );
  }

  /**
   * DELETE reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param url of url string of get request.
   * @param [params] default params to payload.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public override delete<T>(url: string): Observable<T> {
    return this.httpClient
      .delete<T>(url, {
        withCredentials: Object.is(
          this.environment,
          ClientEnvironment.Production,
        ),
      })
      .pipe(
        catchError(this.handleHttpClientError as OperatorFunction<unknown, T>),
      );
  }
}
