import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as IssueLabelActions from './issue-label.actions';
import * as IssueLabelFeature from './issue-label.reducer';
import * as IssueLabelSelectors from './issue-label.selectors';

@Injectable()
export class IssueLabelFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(IssueLabelSelectors.getIssueLabelLoaded));
  allIssueLabel$ = this.store.pipe(
    select(IssueLabelSelectors.getAllIssueLabel),
  );
  selectedIssueLabel$ = this.store.pipe(
    select(IssueLabelSelectors.getSelected),
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(IssueLabelActions.init());
  }
}
