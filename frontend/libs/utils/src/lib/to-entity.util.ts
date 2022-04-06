import { map, Observable } from 'rxjs';
import { Constructor, PlainObjectLiteralConstructor } from './constructor.util';

export const toEntity =
  <T>(Class: Constructor<T> | PlainObjectLiteralConstructor) =>
  (source$: Observable<T>): Observable<T> =>
    source$.pipe(map((data) => Object.assign(data, new Class())));
