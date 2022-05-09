import { Observable } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';

import { Dictionary } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';

import { IssueFieldEntities, IssueFieldEntity } from '@pinguin/api';
import {
  CoreState,
  selectAllIssuesFields,
  selectIssuesFieldEntities,
  selectIssuesFieldIds,
  getIssuesFieldsLoaded,
  getIssuesFieldsLoading,
  selectIssuesFieldTotal,
} from '@pinguin/core';
import { IssuesServiceModule } from '../issues-service.module';

@Injectable({
  providedIn: IssuesServiceModule,
})
export class IssuesFieldsFacade implements OnDestroy {
  /**
   * Issues fields loading state from the `Store` adapter.
   *
   * @public
   * @readonly
   * @type {Observable<boolean>}
   */
  public issuesFieldsLoading$: Observable<boolean> = this.store.select<boolean>(
    getIssuesFieldsLoading,
  );

  /**
   * Issues fields loaded state from the `Store` adapter.
   *
   * @public
   * @readonly
   * @type {Observable<boolean>}
   */
  public issuesFieldsLoaded$: Observable<boolean> = this.store.select<boolean>(
    getIssuesFieldsLoaded,
  );

  /**
   * Issues field total state from the `Store` adapter.
   *
   * @protected
   * @type {Observable<number>}
   */
  public issuesFieldTotal$: Observable<number> = this.store.select<number>(
    selectIssuesFieldTotal,
  );

  /**
   * Issues field ids from the `Store` adapter.
   *
   * @public
   * @type {(Observable<Array<string | number>>)}
   */
  public issuesFieldIds$: Observable<Array<string | number>> = this.store.pipe<
    Array<string | number>
  >(select(selectIssuesFieldIds));

  /**
   * Issues field entities from the `Store` adapter.
   *
   * @public
   * @type {Observable<Dictionary<IssueFieldEntity>>}
   */
  public issuesFieldEntities$: Observable<Dictionary<IssueFieldEntity>> =
    this.store.pipe<Dictionary<IssueFieldEntity>>(
      select(selectIssuesFieldEntities),
    );

  /**
   * Issues fields from the `Store` adapter.
   *
   * @public
   * @type {Observable<IssueFieldEntity[]>}
   */
  public allIssuesFields$: Observable<IssueFieldEntities> =
    this.store.pipe<IssueFieldEntities>(select(selectAllIssuesFields));

  /**
   * Creates an instance of IssuesRoadmapFacade.
   *
   * @constructor
   * @public
   * @param {Store<CoreState>} store
   */
  public constructor(private readonly store: Store<CoreState>) {}

  /**
   * Un-memorize issues fields from the cache manager.
   *
   * @public
   */
  public releaseIssuesFields(): void {
    return selectAllIssuesFields.release();
  }

  /**
   * Un-memorize all issues field entities from the cache manager.
   *
   * @public
   */
  public releaseIssuesFieldEntities(): void {
    return selectIssuesFieldEntities.release();
  }

  /**
   * Release all fields store from the memory.
   *
   * @public
   */
  public ngOnDestroy(): void {
    this.releaseIssuesFields();
    this.releaseIssuesFieldEntities();
  }
}
