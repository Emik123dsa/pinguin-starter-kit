import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingOverlayComponent } from './loading-overlay';
import { SubmittingOverlayComponent } from './submitting-overlay';
import { PreloadingOverlayComponent } from './preloading-overlay';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LoadingOverlayComponent,
    SubmittingOverlayComponent,
    PreloadingOverlayComponent,
  ],
  exports: [
    CommonModule,
    LoadingOverlayComponent,
    SubmittingOverlayComponent,
    PreloadingOverlayComponent,
  ],
})
export class UiOverlayModule {}
