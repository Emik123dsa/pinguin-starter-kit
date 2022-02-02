import { map, Observable } from 'rxjs';

export const toObjectClass = <T>(
  source$: Observable<T>,
  ObjectClass: new (...args: unknown[]) => T | { new (...args: unknown[]): any }
): Observable<T> =>
  source$.pipe(map((data) => Object.assign(data, new ObjectClass())));
