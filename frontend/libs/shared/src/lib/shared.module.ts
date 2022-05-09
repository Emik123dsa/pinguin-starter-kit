import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientJsonpModule,
  HttpClientModule,
  HttpClientXsrfModule,
} from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

// Provide shared directives modules.
import { BrowserEventsModule } from './directives/events';

import { SharedStoreModule } from './shared-store.module';
import { SharedLayoutModule } from './shared-layout.module';
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
    HttpClientJsonpModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),

    // Provide forms modules.
    FormsModule,
    ReactiveFormsModule,

    // Provide store shared module.
    SharedStoreModule,

    // Provide layout modules.
    SharedLayoutModule,
    SharedFlexLayoutModule,

    BrowserEventsModule,
  ],
  declarations: [],
  exports: [
    // Export common module.
    CommonModule,

    // Export router modules.
    RouterModule,
    QuicklinkModule,

    // Export http client modules.
    HttpClientModule,
    HttpClientJsonpModule,
    HttpClientXsrfModule,

    // Export forms modules.
    FormsModule,
    ReactiveFormsModule,

    // Export store shared module.
    SharedStoreModule,

    // Export layout modules.
    SharedLayoutModule,
    SharedFlexLayoutModule,

    BrowserEventsModule,
  ],
  schemas: [],
})
export class SharedModule {
  /**
   * Initialize shared module with root providers.
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
