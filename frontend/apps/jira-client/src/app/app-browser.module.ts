import { NgModule } from '@angular/core';
import { AppBaseModule } from './app-base.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppBaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
