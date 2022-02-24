import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClickOutsideModule } from './click-outside/click-outside.module';

@NgModule({
  imports: [CommonModule, ClickOutsideModule],
  declarations: [],
  exports: [CommonModule, ClickOutsideModule],
})
export class BrowserEventsModule {}
