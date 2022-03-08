import { Constructor } from '@pinguin/utils';
import { Observable } from 'rxjs';
import { Entity } from './entity.model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export abstract class EntityService<E = Constructor<any>> {
  /**
   * Create entity in the adapter.
   *
   * @public
   * @abstract
   * @param {E} entity
   * @returns {Observable<E>}
   */
  public abstract create(entity: E): Observable<E>;

  /**
   * Update entity in the adapter.
   *
   * @public
   * @abstract
   * @param {E} entity
   * @returns {Observable<E>}
   */
  public abstract update(entity: E): Observable<E>;

  /**
   * Delete entity by id in the adapter.
   *
   * @public
   * @abstract
   * @param {Entity} entityId
   * @returns {Observable<E>}
   */
  public abstract deleteById(entityId: Entity): Observable<E>;

  /**
   * Find all entities in the adapter.
   *
   * @public
   * @abstract
   * @returns {Observable<readonly E[]>}
   */
  public abstract findAll(): Observable<readonly E[]>;

  /**
   * Find one entity in the adapter.
   *
   * @public
   * @abstract
   * @param {Entity} entityId
   * @returns {Observable<E>}
   */
  public abstract findOneById(entityId: Entity): Observable<E>;
}
