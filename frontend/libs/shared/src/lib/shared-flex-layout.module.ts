import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule, LayoutConfigOptions } from '@angular/flex-layout';

const flexLayoutConfig: LayoutConfigOptions = {
  addFlexToParent: true,
  useColumnBasisZero: true,
  addOrientationBps: true,
  disableDefaultBps: false,
  detectLayoutDisplay: true,
  disableVendorPrefixes: false,
  serverLoaded: true,
  mediaTriggerAutoRestore: true,
};

@NgModule({
  imports: [
    // Provide flex layout modules.
    FlexLayoutModule.withConfig(flexLayoutConfig),
  ],
  exports: [FlexLayoutModule],
  declarations: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedFlexLayoutModule {}
