import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonDirective } from './ui-button.directive';
import { UiButtonComponent } from './ui-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiButtonDirective, UiButtonComponent],
  exports: [UiButtonDirective, UiButtonComponent],
  schemas: [ ],
})
export class UiButtonModule {}
