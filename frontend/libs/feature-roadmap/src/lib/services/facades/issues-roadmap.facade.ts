import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import {
  IssueFieldEntities,
  IssueFieldEntity,
  IssueLabelEntities,
  IssueLabelEntity,
} from '@pinguin/api';
import {
  CoreEntityState,
  selectAllIssuesFields,
  selectAllIssuesLabels,
  selectIssuesFieldEntities,
  selectIssuesFieldsLoaded,
  selectIssuesFieldsLoading,
  selectIssuesFieldTotal,
  selectIssuesLabelEntities,
} from '@pinguin/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'platform',
})
export class IssuesRoadmapFacade {
  /**
   * Issues fields loading state from the `Store` adapter.
   *
   * @public
   * @readonly
   * @type {Observable<boolean>}
   */
  public issuesFieldsLoading$: Observable<boolean> = this.store.select<boolean>(
    selectIssuesFieldsLoading,
  );

  /**
   * Issues fields loaded state from the `Store` adapter.
   *
   * @public
   * @readonly
   * @type {Observable<boolean>}
   */
  public issuesFieldsLoaded$: Observable<boolean> = this.store.select<boolean>(
    selectIssuesFieldsLoaded,
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
   * Issues label entities from the `Store` adapter.
   *
   * @public
   * @type {Observable<Dictionary<IssueLabelEntity>>}
   */
  public issuesLabelEntities$: Observable<Dictionary<IssueLabelEntity>> =
    this.store.pipe(select(selectIssuesLabelEntities));

  /**
   * Issues labels from the `Store` adapter.
   *
   * @public
   * @type {Observable<IssueLabelEntities>}
   */
  public allIssuesLabels$: Observable<IssueLabelEntities> =
    this.store.select<IssueLabelEntities>(selectAllIssuesLabels);

  /**
   * Issues field entities from the `Store` adapter.
   *
   * @public
   * @type {Observable<Dictionary<IssueFieldEntity>>}
   */
  public issuesFieldEntities$: Observable<Dictionary<IssueFieldEntity>> =
    this.store.pipe(select(selectIssuesFieldEntities));

  /**
   * Issues fields from the `Store` adapter.
   *
   * @public
   * @type {Observable<IssueLabelEntities>}
   */
  public allIssuesFields$: Observable<IssueFieldEntities> =
    this.store.select<IssueFieldEntities>(selectAllIssuesFields);

  /**
   * Creates an instance of IssuesRoadmapFacade.
   *
   * @constructor
   * @public
   * @param {Store<CoreEntityState>} store
   */
  public constructor(private readonly store: Store<CoreEntityState>) {}

  /**
   * Un memorize all issues fields from the cache manager.
   *
   * @public
   */
  public releaseAllIssuesFields(): void {
    return selectAllIssuesFields.release();
  }

  /**
   * Un memorize all issues labels from the cache manager.
   *
   * @public
   */
  public releaseAllIssuesLabels(): void {
    return selectAllIssuesLabels.release();
  }
}
