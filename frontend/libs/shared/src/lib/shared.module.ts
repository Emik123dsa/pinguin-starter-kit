import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// Provide shared layouts.
import { WrapperLayoutComponent } from './layout/wrapper';
import { FooterLayoutComponent } from './layout/footer';
import { HeaderLayoutComponent } from './layout/header';

// Provide shared components.
import { ContainerComponent } from './components/container';

// Provide shared directives modules.
import { BrowserEventsModule } from './directives/events';

@NgModule({
  imports: [
    //  Provide common module.
    CommonModule,

    // Provide router modules.
    RouterModule,
    QuicklinkModule,

    // Provide http client modules.
    HttpClientModule,
    HttpClientXsrfModule,
    HttpClientXsrfModule,

    // Provide forms modules.
    FormsModule,
    ReactiveFormsModule,

    // Provide flex layout modules.
    FlexLayoutModule.withConfig({
      addFlexToParent: true,
      useColumnBasisZero: true,
      addOrientationBps: true,
      disableDefaultBps: false,
      detectLayoutDisplay: true,
      disableVendorPrefixes: false,
      serverLoaded: true,
      mediaTriggerAutoRestore: true,
    }),

    BrowserEventsModule,
  ],
  declarations: [
    WrapperLayoutComponent,
    ContainerComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,
  ],
  providers: [],
  exports: [
    //  Provide common module.
    CommonModule,

    // Provide router modules.
    RouterModule,
    QuicklinkModule,

    // Provide http client modules.
    HttpClientModule,
    HttpClientXsrfModule,
    HttpClientXsrfModule,

    // Provide forms modules.
    FormsModule,
    ReactiveFormsModule,

    // Provide flex layout modules.
    FlexLayoutModule,

    // Provide components and layouts.
    WrapperLayoutComponent,
    ContainerComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,

    BrowserEventsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
