import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as IssuesActions from './issues.actions';
import * as IssuesFeature from './issues.reducer';
import * as IssuesSelectors from './issues.selectors';

@Injectable()
export class IssuesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(IssuesSelectors.getIssuesLoaded));
  allIssues$ = this.store.pipe(select(IssuesSelectors.getAllIssues));
  selectedIssues$ = this.store.pipe(select(IssuesSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(IssuesActions.init());
  }
}
