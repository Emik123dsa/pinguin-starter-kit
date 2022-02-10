import { Constructor, PlainObjectLiteralConstructor } from './constructor.util';
import { map, Observable } from 'rxjs';

export const toObjectClass = <T>(
  source$: Observable<T>,
  ObjectClass: Constructor<T> | PlainObjectLiteralConstructor,
): Observable<T> =>
  source$.pipe(map((data) => Object.assign(data, new ObjectClass())));
