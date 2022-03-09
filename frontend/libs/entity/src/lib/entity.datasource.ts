/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  asyncScheduler,
  BehaviorSubject,
  catchError,
  Connectable,
  connectable,
  distinctUntilChanged,
  filter,
  finalize,
  Observable,
  of,
  shareReplay,
  Subject,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { ShareReplayConfig } from 'rxjs/internal/operators/shareReplay';

import { Constructor } from '@pinguin/utils';

import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';

import { EntityService } from './entity.service';
import { ChangeDetectorRef } from '@angular/core';

/**
 * Abstract entity data source.
 *
 * @export
 * @abstract
 * @class EntityDataSource
 * @typedef {EntityDataSource}
 * @template E
 * @extends {DataSource<E>}
 */
export class EntityDataSource<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  E = Constructor<any>,
  S extends EntityService<E> = EntityService<E>,
> extends DataSource<E> {
  /**
   * Whether entities service will be alive within `DataSource`.
   *
   * @private
   * @readonly
   * @type {Subscription}
   */
  private readonly subscription: Subscription = new Subscription();

  /**
   * All initial entities of `DataSource`.
   *
   * @public
   * @type {BehaviorSubject<readonly E[]>}
   */
  public entitiesSubject: BehaviorSubject<readonly E[]> = new BehaviorSubject<
    readonly E[]
  >([] as E[]);

  /**
   * Whether entity is keeping to be loaded or initialized in `Store` adapter.
   *
   * @private
   * @readonly
   * @type {BehaviorSubject<boolean>}
   */
  private readonly loadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  /**
   * Loading stream of `loadingSubject`.
   *
   * @public
   * @type {*}
   */
  public loading$: Observable<boolean> = this.loadingSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  /**
   * Creates an instance of EntityDataSource.
   *
   * @constructor
   * @public
   * @param {S} entityService
   */
  public constructor(
    private readonly entityService: S,
    // FIXME: figure out is it required to use here `ChangeDetectorRef` after finalize hook.
    private readonly changeDetectorRef?: ChangeDetectorRef,
  ) {
    super();
  }

  /**
   * Override connection for collection.
   *
   * @public
   * @override
   * @param {CollectionViewer} collectionViewer
   * @returns {Observable<readonly E[]>}
   */
  public override connect(
    collectionViewer: CollectionViewer,
  ): Observable<readonly E[]> {
    return this.entitiesSubject.asObservable();
  }

  /**
   * Load all entities before `DataSource` will be loaded.
   * TODO: implement fully entity service.
   * @public
   */
  public load(): void {
    const entityConfig: ShareReplayConfig = {
      // Set initial `bufferSize` to load all entities.
      bufferSize: 4,
      refCount: true,
      scheduler: asyncScheduler,
    };

    const entityService$: Observable<readonly E[]> = this.entityService
      .findAll()
      .pipe(
        shareReplay(entityConfig),
        catchError(() => of(new Array<E>())),
        finalize(() => this.loadingSubject.next(false)),
      );

    // Load all entities, before it will be collected from `CollectionViewer`.
    const loadEntities$: Connectable<readonly E[]> = connectable(
      this.loading$.pipe(
        filter((loading) => !loading),
        tap(() => this.loadingSubject.next(true)),
        switchMap(() => entityService$),
      ),
      {
        connector: () => new Subject<readonly E[]>(),
        resetOnDisconnect: true,
      },
    );

    // Subscribe to loadEntities$ service to handle multi-casting publisher.
    this.subscription.add(loadEntities$.subscribe(this.addMany));

    <Subscription>loadEntities$.connect();
  }

  /**
   * Set all entities before `DataSource` will be loaded.
   *
   * @public
   * @param {readonly E[]} entities
   */
  public setAll(entities: readonly E[]): void {
    this.entitiesSubject.next(entities);
  }

  /**
   *  Add many entities after `DataSource` will be loaded.
   *
   * @public
   * @param {readonly E[]} entities
   */
  public addMany(entities: readonly E[]) {
    const initialEntities: readonly E[] = this.entitiesSubject.getValue();
    this.entitiesSubject.next(initialEntities.concat(entities));
  }

  /**
   * Disconnect from the entities features.
   *
   * @public
   * @override
   * @param {CollectionViewer} collectionViewer
   */
  public override disconnect(collectionViewer: CollectionViewer): void {
    if (this.loadingSubject && !this.loadingSubject.closed) {
      this.loadingSubject.complete();
      // Unsubscribe from the loading `subject`.
      this.loadingSubject.unsubscribe();
    }

    // Entities subject will no longer handled, after entity was disconnected.
    if (this.entitiesSubject && !this.entitiesSubject.closed) {
      this.entitiesSubject.complete();
    }

    // Unsubscribe from the subscription handlers.
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }
}