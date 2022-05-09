import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Provide `ui-card` components for module.
import { CardComponent } from './card.component';
import {
  CardHeaderComponent,
  CardHeaderTitleDirective,
  CardHeaderSubTitleDirective,
} from './components/card-header';
import { CardContentComponent } from './components/card-content';
import { CardFooterComponent } from './components/card-footer';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CardComponent,

    CardHeaderComponent,
    CardHeaderTitleDirective,
    CardHeaderSubTitleDirective,

    CardContentComponent,
    CardFooterComponent,
  ],
  exports: [
    CardComponent,

    CardHeaderComponent,
    CardHeaderTitleDirective,
    CardHeaderSubTitleDirective,

    CardContentComponent,
    CardFooterComponent,
  ],
})
export class UiCardModule {}
