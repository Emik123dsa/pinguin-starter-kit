import { NgZone } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

/**
 * Process messaging in the zone environment.
 * This function will allow to observe in `ChangeDetectorRef`.
 *
 * @template T
 * @param {NgZone} ngZone
 * @returns {(source$: any) => any}
 */
export const runInZone =
  <T>(ngZone: NgZone) =>
  (source$: Observable<T>) =>
    new Observable((observer: Subscriber<T>) => {
      const handleNext = (value: T) => ngZone.run(() => observer.next(value));
      const handleError = (error: unknown) =>
        ngZone.run(() => observer.error(error));
      const handleComplete = () => ngZone.run(() => observer.complete());
      return source$.subscribe({
        next: handleNext,
        error: handleError,
        complete: handleComplete,
      });
    });
