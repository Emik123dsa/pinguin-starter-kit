import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import {
  IssuesFieldEntities,
  IssuesFieldEntity,
  IssuesLabelEntities,
  IssuesLabelEntity,
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
   * @type {Observable<Dictionary<IssuesLabelEntity>>}
   */
  public issuesLabelEntities$: Observable<Dictionary<IssuesLabelEntity>> =
    this.store.select<Dictionary<IssuesLabelEntity>>(selectIssuesLabelEntities);

  /**
   * Issues labels from the `Store` adapter.
   *
   * @public
   * @type {Observable<IssuesLabelEntities>}
   */
  public allIssuesLabels$: Observable<IssuesLabelEntities> =
    this.store.select<IssuesLabelEntities>(selectAllIssuesLabels);

  /**
   * Issues field entities from the `Store` adapter.
   *
   * @public
   * @type {Observable<Dictionary<IssuesFieldEntity>>}
   */
  public issuesFieldEntities$: Observable<Dictionary<IssuesFieldEntity>> =
    this.store.select<Dictionary<IssuesFieldEntity>>(selectIssuesFieldEntities);

  /**
   * Issues fields from the `Store` adapter.
   *
   * @public
   * @type {Observable<IssuesLabelEntities>}
   */
  public allIssuesFields$: Observable<IssuesFieldEntities> =
    this.store.select<IssuesFieldEntities>(selectAllIssuesFields);

  /**
   * Creates an instance of IssuesRoadmapFacade.
   *
   * @constructor
   * @public
   * @param {Store<CoreEntityState>} store
   */
  public constructor(private readonly store: Store<CoreEntityState>) {}
}
