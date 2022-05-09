import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import {
  CoreState,
  IssuesLabelsActionTypes,
  getIssuesLabelTotal,
  getIssuesLabelsLoading,
  IssuesLabelsActions,
} from '../../store';

import { CoreFacadeServiceModule } from './core-facade-service.module';

@Injectable({
  providedIn: CoreFacadeServiceModule,
})
export class IssuesModuleFacade {
  /**
   * Issues label total from `Store` adapter.
   *
   * @public
   * @type {Observable<number>}
   */
  public issuesLabelTotal$: Observable<number> =
    this.store.select<number>(getIssuesLabelTotal);

  /**
   * Issues labels loading from `Store` adapter.
   *
   * @public
   * @type {Observable<boolean>}
   */
  public issuesLabelsLoading$: Observable<boolean> = this.store.select<boolean>(
    getIssuesLabelsLoading,
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
   * Load all issues labels, before
   * it will be initialized, otherwise `lazy-loading` module will not mounted.
   *
   * @public
   */
  public loadIssuesLabels(): void {
    const action: TypedAction<IssuesLabelsActionTypes> =
      IssuesLabelsActions.loadIssuesLabels();

    return this.store.dispatch(action);
  }
}
