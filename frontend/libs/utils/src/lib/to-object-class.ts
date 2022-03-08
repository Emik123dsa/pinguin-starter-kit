import { map, Observable } from 'rxjs';
import { Constructor, PlainObjectLiteralConstructor } from './constructor';

export const toObjectClass =
  <T>(ObjectClass: Constructor<T> | PlainObjectLiteralConstructor) =>
  (source$: Observable<T>): Observable<T> =>
    source$.pipe(map((data) => Object.assign(data, new ObjectClass())));
