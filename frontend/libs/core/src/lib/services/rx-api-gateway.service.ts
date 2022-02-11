import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiGatewayService } from '@pinguin/api';
import { PlainObjectLiteral } from '@pinguin/common';
import { catchError, Observable, OperatorFunction } from 'rxjs';

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
