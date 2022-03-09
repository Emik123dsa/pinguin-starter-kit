import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedFlexLayoutModule {}
