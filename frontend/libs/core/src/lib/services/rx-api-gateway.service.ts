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
import { PlainObjectLiteral, StringUtils } from '@pinguin/utils';

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
    private readonly httpConfigRef: ClientRestApiConfigRef,
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
  protected serialize(body?: PlainObjectLiteral): Optional<string> {
    return this.httpConfigRef.getSerializer()(body as PlainObjectLiteral);
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
        observe: 'body',
      })
      .pipe(catchError(this.handleError as OperatorFunction<unknown, T>));
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
        observe: 'body',
      })
      .pipe(catchError(this.handleError as OperatorFunction<unknown, T>));
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
        observe: 'body',
      })
      .pipe(catchError(this.handleError as OperatorFunction<unknown, T>));
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
        observe: 'body',
      })
      .pipe(catchError(this.handleError as OperatorFunction<unknown, T>));
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
        observe: 'body',
      })
      .pipe(catchError(this.handleError as OperatorFunction<unknown, T>));
  }
}
