import { ObjectLiteral } from '@pinguin/utils';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorHandler } from '@angular/core';

/**
 * Reactive Api Gateway Service for generic entities.
 * #Example of  api gateway service:
 *
 * ```typescript
 * class Service {
 *  constructor(private readonly apiGatewayService: ApiGatewayService) {}
 * }
 * ```
 * @export
 * @abstract
 * @class ApiGatewayService
 */
export abstract class ApiGatewayService implements ErrorHandler {
  /**
   * GET reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param path of path string of get request.
   * @param [params] default params to payload.
   * @returns an reactive instance of generic object {@link T}.
   */
  public abstract get<T>(path: string, params?: HttpParams): Observable<T>;

  /**
   * POST reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param path of path string of get request.
   * @param [body] default params to payload.
   * @returns an reactive instance of generic object {@link T}.
   */
  public abstract post<T>(path: string, body?: ObjectLiteral): Observable<T>;

  /**
   * PUT reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param path of path string of get request.
   * @param [body] default params to payload.
   * @returns an reactive instance of generic object {@link T}.
   */
  public abstract put<T>(path: string, body?: ObjectLiteral): Observable<T>;

  /**
   * PATCH reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param path of path string of get request.
   * @param [body] default params to payload.
   * @returns an reactive instance of generic object {@link T}.
   */
  public abstract patch<T>(path: string, body?: ObjectLiteral): Observable<T>;

  /**
   * DELETE reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param path of path string of get request.
   * @returns an reactive instance of generic object {@link T}.
   */
  public abstract delete<T>(path: string): Observable<T>;

  /**
   * Handle http client errors with {@link HttpClient} backend-client.
   *
   * @protected
   * @template T
   * @param {(HttpErrorResponse & T)} error
   * @param {?Observable<T>} [caught]
   * @returns {*} a handled error as reactive subject.
   */
  public abstract handleError<T>(
    error: HttpErrorResponse & T,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    caught?: Observable<T>,
  ): Observable<never>;
}
