import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingOverlayComponent } from './loading-overlay';
import { PreloaderOverlayComponent } from './preloader-overlay';
import { FormModalOverlayComponent } from './form-modal-overlay/';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FormModalOverlayComponent,
    LoadingOverlayComponent,
    PreloaderOverlayComponent,
  ],
  exports: [
    CommonModule,
    FormModalOverlayComponent,
    LoadingOverlayComponent,
    PreloaderOverlayComponent,
  ],
})
export class UiOverlaysModule {}
