import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonDirective } from './ui-button.directive';
import { UiButtonComponent } from './ui-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiButtonDirective, UiButtonComponent],
  exports: [CommonModule, UiButtonDirective, UiButtonComponent],
})
export class UiButtonModule {}
