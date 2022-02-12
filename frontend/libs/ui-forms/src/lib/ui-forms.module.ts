import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiInputDirective } from './input';
import { UiButtonDirective } from './button';

@NgModule({
  imports: [CommonModule],
  declarations: [UiInputDirective, UiButtonDirective],
  exports: [CommonModule, UiInputDirective, UiButtonDirective],
})
export class UiFormsModule {}
