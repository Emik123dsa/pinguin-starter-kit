import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpStatusCode,
} from '@angular/common/http';

import { Inject, Injectable, Self } from '@angular/core';

import { catchError, Observable, throwError } from 'rxjs';

import {
  ApiGatewayErrorException,
  ApiGatewayService,
  ClientRestApiConfigRef,
  UnknownApiErrorException,
} from '@pinguin/api';
import { PlainObjectLiteral, StringUtils } from '@pinguin/utils';
import { ClientEnvironment, ENVIRONMENT } from '@pinguin/environments';

@Injectable({
  providedIn: 'root',
})
export class RxApiGatewayService extends ApiGatewayService {
  /**
   * Creates an instance of RxApiGatewayService.
   *
   * @constructor
   * @public
   * @param {HttpClient} httpClient
   * @param {ClientRestApiConfigRef} httpConfigRef
   */
  public constructor(
    private readonly httpClient: HttpClient,
    private readonly apiConfigRef: ClientRestApiConfigRef,
    @Self() @Inject(ENVIRONMENT) readonly environment: ClientEnvironment,
  ) {
    super();
  }

  /**
   * GET reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param path of path string of get request.
   * @param [params] default params to payload.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public override get<T>(
    path: string,
    params: HttpParams = new HttpParams(),
  ): Observable<T> {
    return this.httpClient
      .get<T>(path, {
        params,
        observe: 'body',
        responseType: 'json',
        withCredentials: Object.is(
          this.environment,
          ClientEnvironment.Production,
        ),
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * POST reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param path of path string of get request.
   * @param [body] default params to payload.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public override post<T>(
    path: string,
    body?: PlainObjectLiteral,
  ): Observable<T> {
    return this.httpClient
      .post<T>(path, this.serialize(body), {
        observe: 'body',
        responseType: 'json',
        withCredentials: Object.is(
          this.environment,
          ClientEnvironment.Production,
        ),
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * PUT reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param path of path string of get request.
   * @param [body] default params to payload.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public override put<T>(
    path: string,
    body?: PlainObjectLiteral,
  ): Observable<T> {
    return this.httpClient
      .put<T>(path, this.serialize(body), {
        observe: 'body',
        responseType: 'json',
        withCredentials: Object.is(
          this.environment,
          ClientEnvironment.Production,
        ),
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * PATCH reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param path of path string of get request.
   * @param [params] default params to payload.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public override patch<T>(
    path: string,
    params: HttpParams = new HttpParams(),
  ): Observable<T> {
    return this.httpClient
      .patch<T>(path, {
        params,
        observe: 'body',
        responseType: 'json',
        withCredentials: Object.is(
          this.environment,
          ClientEnvironment.Production,
        ),
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * DELETE reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param path of path string of get request.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public override delete<T>(path: string): Observable<T> {
    return this.httpClient
      .delete<T>(path, {
        observe: 'body',
        responseType: 'json',
        withCredentials: Object.is(
          this.environment,
          ClientEnvironment.Production,
        ),
      })
      .pipe(catchError(this.handleError));
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
  public override handleError<T>(
    error: HttpErrorResponse & T,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    caught?: Observable<T>,
  ): Observable<never> {
    return throwError((): Error | string => {
      if (StringUtils.isString(error)) {
        return error;
      }

      if (error.error instanceof ErrorEvent) {
        // Throw unknown api error exception.
        return new UnknownApiErrorException(error.error.message);
      }

      if (error.ok && Object.is(error.status, HttpStatusCode.Ok)) {
        // Throw api gateway error exception.
        return new ApiGatewayErrorException(error.message, error.status);
      }

      // Throw any api gateway error exception.
      return error.error;
    });
  }

  /**
   * Serialize context request to the string.
   *
   * @private
   * @param {?PlainObjectLiteral} [body]
   * @returns {*}
   */
  private serialize(body?: PlainObjectLiteral): Optional<string> {
    const serializer: (data: PlainObjectLiteral) => Optional<string> =
      this.apiConfigRef.getSerializer();

    return serializer.call(null, body as PlainObjectLiteral);
  }
}
