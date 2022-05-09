import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as IssueActions from './issue.actions';
import * as IssueFeature from './issue.reducer';
import * as IssueSelectors from './issue.selectors';

@Injectable()
export class IssueFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(IssueSelectors.getIssueLoaded));
  allIssue$ = this.store.pipe(select(IssueSelectors.getAllIssue));
  selectedIssue$ = this.store.pipe(select(IssueSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(IssueActions.init());
  }
}
