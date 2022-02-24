import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// Provide shared layouts.
import { WrapperLayoutComponent } from './layouts/wrapper/wrapper.component';
import { FooterLayoutComponent } from './layouts/footer/footer.component';
import { HeaderLayoutComponent } from './layouts/header/header.component';

// Provide shared components.
import { ContainerComponent } from './components/container/container.component';

// Provide shared directives modules.
import { BrowserEventsModule } from './directives/events/browser-events.module';

@NgModule({
  imports: [
    //  Provide common module.
    CommonModule,

    // Provide router modules.
    RouterModule,

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
