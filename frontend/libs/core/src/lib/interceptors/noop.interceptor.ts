import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { noop, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoopInterceptor implements HttpInterceptor {
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap({ error: noop }));
  }
}
