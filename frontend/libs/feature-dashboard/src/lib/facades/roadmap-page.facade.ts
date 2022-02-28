import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import {
  CoreEntityState,
  selectIssuesFieldsLoaded,
  selectIssuesFieldsLoading,
  selectIssuesFieldTotal,
  selectIssuesLabelsLoading,
  selectIssuesLabelTotal,
} from '@pinguin/core';
import { Observable } from 'rxjs';

// observableNumber$; let n; let e = $error, let c = $complete
@Injectable({
  providedIn: 'root',
})
export class RoadmapPageFacade {
  /**
   * Issues fields loading state from the `Store` adapter.
   *
   * @public
   * @readonly
   * @type {Observable<boolean>}
   */
  public issuesFieldsLoading$: Observable<boolean> = this.store.select(
    selectIssuesFieldsLoading,
  );

  /**
   * Issues fields loaded state from the `Store` adapter.
   *
   * @public
   * @readonly
   * @type {Observable<boolean>}
   */
  public issuesFieldsLoaded$: Observable<boolean> = this.store.select(
    selectIssuesFieldsLoaded,
  );

  /**
   * Issues field total state from the `Store` adapter.
   *
   * @protected
   * @type {Observable<number>}
   */
  public issuesFieldTotal$: Observable<number> = this.store.select(
    selectIssuesFieldTotal,
  );

  /**
   * Creates an instance of RoadmapPageFacade.
   *
   * @constructor
   * @public
   * @param {Store<CoreEntityState>} store
   */
  public constructor(private readonly store: Store<CoreEntityState>) {}
}
