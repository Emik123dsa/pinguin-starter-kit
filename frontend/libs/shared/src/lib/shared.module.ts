import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WrapperLayoutComponent } from './layouts/wrapper/wrapper.component';
import { ContainerComponent } from './components/container/container.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

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
  ],
  declarations: [WrapperLayoutComponent, ContainerComponent],
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
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
