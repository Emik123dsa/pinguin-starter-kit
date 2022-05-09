import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as IssueFieldActions from './issue-field.actions';

import * as IssueFieldSelectors from './issue-field.selectors';

@Injectable()
export class IssueFieldFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(IssueFieldSelectors.getIssueFieldLoaded));
  allIssueField$ = this.store.pipe(
    select(IssueFieldSelectors.getAllIssueField),
  );
  selectedIssueField$ = this.store.pipe(
    select(IssueFieldSelectors.getSelected),
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(IssueFieldActions.init());
  }
}
