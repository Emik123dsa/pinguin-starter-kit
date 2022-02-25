import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import { CoreModule } from '../core.module';

import {
  CoreEntityState,
  IssuesLabelsActionTypes,
  selectIssueLabelTotal,
  selectIssuesLabelsLoading,
  IssuesLabelsEntityActions,
} from '../store';

@Injectable({
  providedIn: CoreModule,
})
export class DashboardModuleFacade {
  issueLabelTotal$ = this.store.select(selectIssueLabelTotal);

  issuesLabelsLoading$ = this.store.select(selectIssuesLabelsLoading);

  public constructor(private readonly store: Store<CoreEntityState>) {}

  public loadAllIssuesLabels() {
    const action: TypedAction<IssuesLabelsActionTypes> =
      IssuesLabelsEntityActions.loadAllIssuesLabels();

    return this.store.dispatch(action);
  }
}
