import { ErrorHandler, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorRequestInterceptor implements HttpInterceptor, ErrorHandler {
  /**
   * Handle http errors with {@link HttpClient} backend-client.
   * TODO: implement logger service for debugging unhandled client errors.
   *
   * Method is close to the `apiGatewayService` handle http client errors,
   * but will handle only simple errors inside backend as:
   *
   * 1) logging-services,
   * 2) analytics-services,
   *
   * @protected
   * @template T
   * @param {(HttpErrorResponse & T)} error
   * @param {?Observable<T>} [caught]
   * @returns {*} a handled error as reactive subject.
   */
  public handleError<T>(
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
          // Throw error exception.
          return new Error(error.statusText);
        }

        if (
          Object.is(error.status, 0) &&
          Object.is(error.statusText, 'Unknown Error')
        ) {
          // Throw unknown error exception.
          return new Error(error.statusText);
        }
      }

      const fallbackErrorCode = 'Unknown Error Exception';
      // Throw any error exception.
      return error.error || fallbackErrorCode;
    });
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
    return next.handle(request).pipe(catchError(this.handleError));
  }
}
