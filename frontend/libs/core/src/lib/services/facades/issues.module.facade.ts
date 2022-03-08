import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import {
  CoreEntityState,
  IssuesLabelsActionTypes,
  selectIssuesLabelTotal,
  selectIssuesLabelsLoading,
  IssuesLabelsActions,
} from '../../store';

@Injectable({
  providedIn: 'platform',
})
export class IssuesModuleFacade {
  /**
   * Issues label total from `Store` adapter.
   *
   * @public
   * @type {Observable<number>}
   */
  public issuesLabelTotal$: Observable<number> = this.store.select<number>(
    selectIssuesLabelTotal,
  );

  /**
   * Issues labels loading from `Store` adapter.
   *
   * @public
   * @type {Observable<boolean>}
   */
  public issuesLabelsLoading$: Observable<boolean> = this.store.select<boolean>(
    selectIssuesLabelsLoading,
  );

  /**
   * Creates an instance of IssuesModuleFacade.
   *
   * @constructor
   * @public
   * @param {Store<CoreEntityState>} store
   */
  public constructor(private readonly store: Store<CoreEntityState>) {}

  /**
   * Load all issues labels, before
   * it will be initialized, otherwise `lazy-loading` module will not mounted.
   *
   * @public
   */
  public loadAllIssuesLabels(): void {
    const action: TypedAction<IssuesLabelsActionTypes> =
      IssuesLabelsActions.loadAllIssuesLabels();

    return this.store.dispatch(action);
  }
}
