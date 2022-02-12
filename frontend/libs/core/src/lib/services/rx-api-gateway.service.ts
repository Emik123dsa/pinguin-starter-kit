import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiGatewayErrorException, ApiGatewayService } from '@pinguin/api';
import { PlainObjectLiteral } from '@pinguin/common';
import { catchError, Observable, OperatorFunction, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxApiGatewayService extends ApiGatewayService {
  /**
   * Creates an instance of rx api gateway service.
   *
   * @param  {HttpClient} httpClient
   * @memberof RxApiGatewayService
   */
  public constructor(private readonly httpClient: HttpClient) {
    super();
  }

  protected handleHttpClientError<T>(
    error: HttpErrorResponse & T,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    caught?: Observable<T>,
  ) {
    return throwError(() => {
      if (
        error.ok &&
        Object.is(error.statusText, 'OK') &&
        Object.is(error.status, HttpStatusCode.Ok)
      ) {
        throw error;
      } else return new ApiGatewayErrorException(error.message);
    });
  }

  public override get<T>(
    url: string,
    params: HttpParams = new HttpParams(),
  ): Observable<T> {
    return this.httpClient
      .get<T>(url, { params, withCredentials: true })
      .pipe(
        catchError(this.handleHttpClientError as OperatorFunction<unknown, T>),
      );
  }

  public override post<T>(
    url: string,
    body?: PlainObjectLiteral,
  ): Observable<T> {
    return this.httpClient
      .post<T>(url, JSON.stringify(body), { withCredentials: true })
      .pipe(
        catchError(this.handleHttpClientError as OperatorFunction<unknown, T>),
      );
  }

  public override put<T>(
    url: string,
    body?: PlainObjectLiteral,
  ): Observable<T> {
    return this.httpClient
      .put<T>(url, JSON.stringify(body), { withCredentials: true })
      .pipe(
        catchError(this.handleHttpClientError as OperatorFunction<unknown, T>),
      );
  }

  public override patch<T>(
    url: string,
    params: HttpParams = new HttpParams(),
  ): Observable<T> {
    return this.httpClient
      .patch<T>(url, { params, withCredentials: true })
      .pipe(
        catchError(this.handleHttpClientError as OperatorFunction<unknown, T>),
      );
  }

  public override delete<T>(url: string): Observable<T> {
    return this.httpClient
      .delete<T>(url, { withCredentials: true })
      .pipe(
        catchError(this.handleHttpClientError as OperatorFunction<unknown, T>),
      );
  }
}
