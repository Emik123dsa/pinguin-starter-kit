import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import {
  CoreEntityState,
  IssuesLabelsActionTypes,
  selectIssuesLabelTotal,
  selectIssuesLabelsLoading,
  IssuesLabelsActions,
} from '../store';

@Injectable({
  providedIn: 'root',
})
export class DashboardModuleFacade {
  public issuesLabelTotal$ = this.store.select(selectIssuesLabelTotal);

  public issuesLabelsLoading$ = this.store.select(selectIssuesLabelsLoading);

  public constructor(private readonly store: Store<CoreEntityState>) {}

  public loadAllIssuesLabels() {
    const action: TypedAction<IssuesLabelsActionTypes> =
      IssuesLabelsActions.loadAllIssuesLabels();

    return this.store.dispatch(action);
  }
}
