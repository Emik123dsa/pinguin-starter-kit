import { PlainObjectLiteral } from '@pinguin/utils';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

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
export abstract class ApiGatewayService {
  /**
   * GET reactive api service.
   *
   * @template T of generic which will be formatted.
   * @param path of url string of get request.
   * @param [params] default params to payload.
   * @returns an reactive instance of {@link HttpClient}.
   */
  public abstract get<T>(url: string, params?: HttpParams): Observable<T>;

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
