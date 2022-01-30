import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { WINDOW_PROVIDERS } from './providers';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule],
  declarations: [],
  providers: [WINDOW_PROVIDERS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommonBaseModule {}
