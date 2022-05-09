import { NgModule } from '@angular/core';

// Provide shared module.
import { SharedModule } from '@pinguin/shared';

// Provide `UI` modules for feature.
import { UiCardModule } from '@pinguin/ui-card';
import { UiButtonModule } from '@pinguin/ui-button';
import { UiInputModule } from '@pinguin/ui-input';

// Provide locale components.
import { IssueCardFormComponent } from './components/issue-card-form';
import { IssueCardDialogComponent } from './components/issue-card-dialog';
import { IssuesCardListComponent } from './components/issues-card-list';

import { IssuesRoutingModule } from './issues-routing.module';

// Service issues module.
import { IssuesServiceModule } from './services';

// Feature store module.
import { IssuesStoreModule } from './store';
import { OverlayModule } from '@pinguin/overlay';

import { IssuesContainerComponent } from './containers/issues';
import { IssueEditContainerComponent } from './containers/issue-edit';
import { IssueDetailContainerComponent } from './containers/issue-detail';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromIssues from './+state/issues.reducer';
import { IssuesEffects } from './+state/issues.effects';
import { IssuesFacade } from './+state/issues.facade';

@NgModule({
  imports: [
    // Provide shared module.
    SharedModule.forRoot(),

    OverlayModule.forRoot(),

    // Provide store module.
    IssuesStoreModule,

    IssuesServiceModule,

    // Provide routing module.
    IssuesRoutingModule,

    // Provide UI-dynamic modules.
    UiCardModule,
    UiInputModule,
    UiButtonModule,

    // EffectsModule.forFeature([IssuesEffects]),
    // StoreModule.forFeature(fromIssues.ISSUES_FEATURE_KEY, fromIssues.reducer),
  ],
  providers: [IssuesFacade],
  declarations: [
    // Provide components of feature.
    IssueCardFormComponent,
    IssueCardDialogComponent,
    IssuesCardListComponent,
    IssueDetailContainerComponent,
    IssueEditContainerComponent,
    IssuesContainerComponent,
  ],
})
export class IssuesModule {}
