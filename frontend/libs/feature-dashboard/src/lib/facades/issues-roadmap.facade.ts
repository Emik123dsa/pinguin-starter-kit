import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { IssuesFieldEntity, IssuesLabelEntity } from '@pinguin/api';
import {
  CoreEntityState,
  selectIssuesFieldEntities,
  selectIssuesLabelEntities,
} from '@pinguin/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssuesRoadmapFacade {
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
   * Creates an instance of IssuesRoadmapFacade.
   *
   * @constructor
   * @public
   * @param {Store<CoreEntityState>} store
   */
  public constructor(private readonly store: Store<CoreEntityState>) {}
}
