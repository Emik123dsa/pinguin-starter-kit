import { NgModule } from '@angular/core';

// Provide shared module.
import { SharedModule } from '@pinguin/shared';

// Provide `UI` modules for feature.
import { UiCardModule } from '@pinguin/ui-card';
import { UiButtonModule } from '@pinguin/ui-button';
import { UiInputModule } from '@pinguin/ui-input';

// Provide locale components.
import { RoadmapTableComponent } from './components/roadmap-table';
import { CardFormComponent } from './components/card-form';
import { CardListComponent } from './components/card-list';
import { CardDialogComponent } from './components/card-dialog';
import { FieldsTableComponent } from './components/fields-table';
import { LabelsTableComponent } from './components/labels-table';

// Provide routing components.
import { RoadmapContainerComponent } from './containers/roadmap-container';
import { FeatureIssuesRoutingModule } from './feature-issues-routing.module';

// Feature store module.
import { IssuesStoreModule } from './store';
import { OverlayModule } from '@pinguin/overlay';

@NgModule({
  imports: [
    // Provide shared module.
    SharedModule.forRoot(),

    OverlayModule.forRoot(),

    // Provide routing module.
    FeatureIssuesRoutingModule,

    // Provide store modules.
    IssuesStoreModule,

    // Provide UI-dynamic modules.
    UiCardModule,
    UiInputModule,
    UiButtonModule,
  ],
  declarations: [
    // Provide container components.
    RoadmapContainerComponent,

    // Provide components of feature.
    RoadmapTableComponent,
    CardFormComponent,
    CardListComponent,
    CardDialogComponent,
    FieldsTableComponent,
    LabelsTableComponent,
  ],
  providers: [],
})
export class FeatureIssuesModule {}
