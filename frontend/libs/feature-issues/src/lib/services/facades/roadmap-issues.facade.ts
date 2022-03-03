import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { IssuesFieldEntity, IssuesLabelEntity } from '@pinguin/api';
import {
  CoreEntityState,
  selectIssuesFieldEntities,
  selectIssuesFieldsLoaded,
  selectIssuesFieldsLoading,
  selectIssuesFieldTotal,
  selectIssuesLabelEntities,
} from '@pinguin/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoadmapIssuesFacade {
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
   * Issues field entities from the `Store` adapter.
   *
   * @public
   * @type {Observable<Dictionary<IssuesFieldEntity>>}
   */
  public issuesFieldEntities$: Observable<Dictionary<IssuesFieldEntity>> =
    this.store.select<Dictionary<IssuesFieldEntity>>(selectIssuesFieldEntities);

  /**
   * Creates an instance of RoadmapIssuesFacade.
   *
   * @constructor
   * @public
   * @param {Store<CoreEntityState>} store
   */
  public constructor(private readonly store: Store<CoreEntityState>) {}
}
