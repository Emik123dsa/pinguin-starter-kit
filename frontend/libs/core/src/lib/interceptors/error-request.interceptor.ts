import { ErrorHandler, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
} from '@angular/common/http';
import { Observable, retry, tap } from 'rxjs';

import { ClientRestApiConfigRef } from '@pinguin/api';

@Injectable({
  providedIn: 'root',
})
export class ErrorRequestInterceptor
  extends ErrorHandler
  implements HttpInterceptor
{
  public constructor(private readonly apiConfigRef: ClientRestApiConfigRef) {
    super();
  }

  /**
   * Override http backend request.
   *
   * @public
   * @param {HttpRequest<unknown>} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<unknown>>}
   */
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const errorAttemptsContext: HttpContextToken<number> =
      this.apiConfigRef.getErrorAttempts();
    const errorAttempts: number = request.context.get(errorAttemptsContext);

    const retryAttemptsContext: HttpContextToken<number> =
      this.apiConfigRef.getRetryAttempts();
    const retryAttempts: number = request.context.get(retryAttemptsContext);

    return next.handle(request).pipe(
      tap({
        // Whether any error was occurred in the request after dispatching.
        error: () =>
          request.context.set(errorAttemptsContext, errorAttempts + 1),
      }),
      retry(retryAttempts),
    );
  }
}
