import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingOverlayComponent } from './loading-overlay';

import { PreloadingOverlayComponent } from './preloading-overlay';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingOverlayComponent, PreloadingOverlayComponent],
  exports: [CommonModule, LoadingOverlayComponent, PreloadingOverlayComponent],
})
export class UiOverlayModule {}
