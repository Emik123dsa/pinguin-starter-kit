import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '../app.component';
import { AppBaseModule } from '../base/app-base.module';

@NgModule({
  imports: [BrowserAnimationsModule, AppBaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
