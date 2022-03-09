import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  imports: [
    // Reactive component module for `@ngrx/entity`.
    ReactiveComponentModule,
  ],
  declarations: [],
  exports: [ReactiveComponentModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedStoreModule {}
