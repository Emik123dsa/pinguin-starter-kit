import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppBaseModule } from './app-base.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppBaseModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
