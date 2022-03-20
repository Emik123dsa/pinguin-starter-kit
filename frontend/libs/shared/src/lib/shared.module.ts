import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

// Provide shared layouts.
import { WrapperLayoutComponent } from './layout/wrapper';
import { FooterLayoutComponent } from './layout/footer';
import { HeaderLayoutComponent } from './layout/header';

// Provide shared components.
import { ContainerComponent } from './components/container';

// Provide shared directives modules.
import { BrowserEventsModule } from './directives/events';

import { SharedCdkModule } from './shared-cdk.module';
import { SharedStoreModule } from './shared-store.module';
import { SharedFlexLayoutModule } from './shared-flex-layout.module';

@NgModule({
  imports: [
    // Provide common module.
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

    // Provide store shared module.
    SharedStoreModule,

    // Provide flex layout modules.
    SharedFlexLayoutModule,

    SharedCdkModule,

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

    // Provide store shared module.
    SharedStoreModule,

    // Provide flex layout modules.
    SharedFlexLayoutModule,

    SharedCdkModule,

    // Provide components and layouts.
    WrapperLayoutComponent,
    ContainerComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,

    BrowserEventsModule,
  ],
  schemas: [],
})
export class SharedModule {
  /**
   * Initialize shared module with root provider.
   *
   * @public
   * @static
   * @returns {ModuleWithProviders<SharedModule>}
   */
  public static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
