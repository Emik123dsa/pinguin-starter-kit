import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  imports: [
    // Reactive component module for `@ngrx/entity`.
    ReactiveComponentModule,
  ],
  declarations: [],
  exports: [ReactiveComponentModule],
  schemas: [],
})
export class SharedStoreModule {}
