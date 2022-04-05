import { Observable } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import {
  CoreEntityState,
  selectAllIssuesLabels,
  selectIssuesLabelEntities,
} from '@pinguin/core';
import { IssueLabelEntities, IssueLabelEntity } from '@pinguin/api';
import { IssuesServiceModule } from '../issues-service.module';

@Injectable({
  providedIn: IssuesServiceModule,
})
export class IssuesLabelsFacade implements OnDestroy {
  /**
   * Issues labels from the `Store` adapter.
   *
   * @public
   * @type {Observable<IssueLabelEntities>}
   */
  public all$: Observable<IssueLabelEntities> = this.store.pipe(
    select(selectAllIssuesLabels),
  );

  /**
   * Issues label entities from the `Store` adapter.
   *
   * @public
   * @type {Observable<Dictionary<IssueLabelEntity>>}
   */
  public entities$: Observable<Dictionary<IssueLabelEntity>> = this.store.pipe<
    Dictionary<IssueLabelEntity>
  >(select(selectIssuesLabelEntities));

  /**
   * Creates an instance of IssuesRoadmapFacade.
   *
   * @constructor
   * @public
   * @param {Store<CoreEntityState>} store
   */
  public constructor(private readonly store: Store<CoreEntityState>) {}

  /**
   * Un memorize all issues label entities from the cache manager.
   *
   * @public
   */
  public releaseEntities(): void {
    return selectIssuesLabelEntities.release();
  }

  /**
   * Un memorize all issues labels from the cache manager.
   *
   * @public
   */
  public releaseAll(): void {
    return selectAllIssuesLabels.release();
  }

  /**
   * Release all labels store from the memory.
   *
   * @public
   */
  public ngOnDestroy(): void {
    this.releaseAll();
    this.releaseEntities();
  }
}
