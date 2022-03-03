import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Provide common store module.
import { CommonStoreModule } from '@pinguin/common';

// Provide shared module.
import { SharedModule } from '@pinguin/shared';

// Provide `UI` modules for feature.
import { UiCardModule } from '@pinguin/ui-card';
import { UiButtonModule } from '@pinguin/ui-button';
import { UiInputModule } from '@pinguin/ui-input';

// Provide locale components.
import { RoadmapComponent } from './components/roadmap';
import { CardFormComponent } from './components/card-form';
import { CardListComponent } from './components/card-list';
import { FieldsTableComponent } from './components/fields-table';
import { LabelsTableComponent } from './components/labels-table';

// Provide services facades.
import { RoadmapIssuesFacade } from './services/facades';

// Provide routing components.
import { RoadmapContainerComponent } from './containers/roadmap-container';
import { FeatureIssuesRoutingModule } from './feature-issues-routing.module';

// Feature store module.
import { IssuesStoreModule } from './store';

@NgModule({
  imports: [
    CommonModule,

    // Provide store modules.
    CommonStoreModule,
    IssuesStoreModule,

    // Provide routing module.
    FeatureIssuesRoutingModule,

    // Provide shared module.
    SharedModule.forRoot(),

    // Provide UI-dynamic modules.
    UiCardModule,
    UiInputModule,
    UiButtonModule,
  ],
  declarations: [
    RoadmapContainerComponent,
    RoadmapComponent,
    CardFormComponent,
    CardListComponent,
    FieldsTableComponent,
    LabelsTableComponent,
  ],
  providers: [],
})
export class FeatureIssuesModule {}
