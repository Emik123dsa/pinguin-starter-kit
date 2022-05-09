import { map, Observable } from 'rxjs';
import { Constructor } from './constructor.util';

export const toEntity: <T>(
  EntityClass: Constructor<T>,
) => (source$: Observable<T>) => Observable<T> =
  <T>(EntityClass: Constructor<T>) =>
  (source$: Observable<T>): Observable<T> =>
    source$.pipe(map((data) => Object.assign(data, new EntityClass())));
