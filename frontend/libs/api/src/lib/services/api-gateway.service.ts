import { HttpStatus, PlainObjectLiteral } from '@pinguin/common';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ApiGatewayErrorException } from '../exceptions';

/**
 * Reactive Api Gateway Service for generic entities.
 * #Example of  api gateway service:
 *
 * ```ts
 * class Service {
 * constructor(private readonly apiGatewayService: ApiGatewayService) {}
 * }
 * ```
 * @export
 * @abstract
 * @class ApiGatewayService
 */
export abstract class ApiGatewayService {
  protected handleHttpClientError<T>(
    error: HttpErrorResponse & T,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    caught?: Observable<T>,
  ) {
    return throwError(() => {
      if (
        error.ok ||
        (Object.is(error.statusText, 'OK') &&
          Object.is(error.status, HttpStatus.OK))
      ) {
        throw error;
      } else return new ApiGatewayErrorException(error.message);
    });
  }

  /**
   * GET reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param path of url string of get request.
   * @param [params] default params to payload.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public abstract get<T>(url: string, params: HttpParams): Observable<T>;

  /**
   * POST reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param url of url string of get request.
   * @param [params] default params to payload.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public abstract post<T>(
    url: string,
    body?: PlainObjectLiteral,
  ): Observable<T>;

  /**
   * PUT reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param url of url string of get request.
   * @param [params] default params to payload.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public abstract put<T>(url: string, body?: PlainObjectLiteral): Observable<T>;

  /**
   * PATCH reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param url of url string of get request.
   * @param [params] default params to payload.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public abstract patch<T>(
    url: string,
    body?: PlainObjectLiteral,
  ): Observable<T>;

  /**
   * DELETE reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param url of url string of get request.
   * @param [params] default params to payload.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public abstract delete<T>(url: string): Observable<T>;
}
