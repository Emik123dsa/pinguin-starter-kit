import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromIssue from './+state/issue.reducer';
import { IssueEffects } from './+state/issue.effects';
import { IssueFacade } from './+state/issue.facade';
import { IssueLabelFacade } from './+state/issue-label.facade';
import { IssueFieldFacade } from './+state/issue-field.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromIssue.ISSUE_FEATURE_KEY, fromIssue.reducer),
    EffectsModule.forFeature([IssueEffects]),
  ],
  providers: [IssueFacade, IssueLabelFacade, IssueFieldFacade],
})
export class ClientIssuesDataAccessModule {}
