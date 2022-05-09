import { NgModule } from '@angular/core';

// Provide `cdk` modules.
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { ObserversModule } from '@angular/cdk/observers';
import { CdkStepperModule } from '@angular/cdk/stepper';

const cdkModules = [
  // A11yModule,
  // OverlayModule,
  // DragDropModule,
  // PlatformModule,
  // PortalModule,
  // ObserversModule,
  // CdkTableModule,
  // CdkStepperModule,
];

@NgModule({
  imports: [],
  exports: [],
  schemas: [],
})
export class SharedCdkModule {}
