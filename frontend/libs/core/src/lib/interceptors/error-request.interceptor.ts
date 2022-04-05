import { ErrorHandler, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode,
  HttpContextToken,
  HttpContext,
} from '@angular/common/http';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';
import { StringUtils } from '@pinguin/utils';
import {
  ApiGatewayErrorException,
  ClientRestApiConfigRef,
  UnknownApiErrorException,
} from '@pinguin/api';

@Injectable({
  providedIn: 'root',
})
export class ErrorRequestInterceptor implements HttpInterceptor, ErrorHandler {
  public constructor(private readonly httpConfigRef: ClientRestApiConfigRef) {}

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
      this.httpConfigRef.getErrorAttempts();
    const errorAttempts: number = request.context.get(errorAttemptsContext);

    const retryAttemptsContext: HttpContextToken<number> =
      this.httpConfigRef.getRetryAttempts();
    const retryAttempts: number = request.context.get(retryAttemptsContext);

    return next.handle(request).pipe(
      tap({
        // Whether any error was occurred in the request after dispatching.
        error: () =>
          request.context.set(errorAttemptsContext, errorAttempts + 1),
      }),
      retry(retryAttempts),
      catchError(this.handleError),
    );
  }
}
