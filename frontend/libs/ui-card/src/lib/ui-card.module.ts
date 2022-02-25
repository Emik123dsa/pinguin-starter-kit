import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Provide ui-card.module.
import { UiCardComponent } from './ui-card.component';

// Provide ui-card components.
import { UiCardHeaderComponent } from './components/card-header';
import { UiCardContentComponent } from './components/card-content';
import { UiCardFooterComponent } from './components/card-footer';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiCardComponent,
    UiCardHeaderComponent,
    UiCardContentComponent,
    UiCardFooterComponent,
  ],
  exports: [
    CommonModule,
    UiCardComponent,
    UiCardHeaderComponent,
    UiCardContentComponent,
    UiCardFooterComponent,
  ],
})
export class UiCardModule {}
