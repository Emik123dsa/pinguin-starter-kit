import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { getIssuesReducer } from './reducers';
import { ISSUES_FEATURE_KEY } from './constants';
import { IssuesLabelsEffects, IssuesFieldsEffects } from './effects';
import { IssuesEntityState } from './models';

@NgModule({
  imports: [
    StoreModule.forFeature(ISSUES_FEATURE_KEY, getIssuesReducer),
    EffectsModule.forFeature([IssuesLabelsEffects, IssuesFieldsEffects]),
  ],
  providers: [IssuesLabelsEffects, IssuesFieldsEffects],
})
export class DashboardStoreModule {
  public constructor(public readonly store: Store<IssuesEntityState>) {}
}
