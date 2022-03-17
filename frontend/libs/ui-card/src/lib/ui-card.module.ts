import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Provide ui-card.module.
import { UiCardComponent } from './ui-card.component';

// Provide ui-card components.
import { UiCardHeaderComponent } from './card-header';
import { UiCardContentComponent } from './card-content';
import { UiCardFooterComponent } from './card-footer';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiCardComponent,
    UiCardHeaderComponent,
    UiCardContentComponent,
    UiCardFooterComponent,
  ],
  exports: [
    UiCardComponent,
    UiCardHeaderComponent,
    UiCardContentComponent,
    UiCardFooterComponent,
  ],
})
export class UiCardModule {}
