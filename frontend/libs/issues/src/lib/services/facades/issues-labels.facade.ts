import { Observable } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import {
  CoreState,
  getAllIssuesLabels,
  getIssuesLabelEntities,
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
  public allIssuesLabels$: Observable<IssueLabelEntities> =
    this.store.pipe<IssueLabelEntities>(select(getAllIssuesLabels));

  /**
   * Issues label entities from the `Store` adapter.
   *
   * @public
   * @type {Observable<Dictionary<IssueLabelEntity>>}
   */
  public issuesLabelEntities$: Observable<Dictionary<IssueLabelEntity>> =
    this.store.pipe<Dictionary<IssueLabelEntity>>(
      select(getIssuesLabelEntities),
    );

  /**
   * Creates an instance of IssuesRoadmapFacade.
   *
   * @constructor
   * @public
   * @param {Store<CoreState>} store
   */
  public constructor(private readonly store: Store<CoreState>) {}

  /**
   * Un memorize all issues label entities from the cache manager.
   *
   * @public
   */
  public releaseIssuesLabelEntities(): void {
    return getIssuesLabelEntities.release();
  }

  /**
   * Un memorize all issues labels from the cache manager.
   *
   * @public
   */
  public releaseIssuesLabels(): void {
    return getAllIssuesLabels.release();
  }

  /**
   * Release all labels store from the memory.
   *
   * @public
   */
  public ngOnDestroy(): void {
    this.releaseIssuesLabels();
    this.releaseIssuesLabelEntities();
  }
}
