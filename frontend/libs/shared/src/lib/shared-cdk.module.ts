import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Provide `cdk` modules.
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { ObserversModule } from '@angular/cdk/observers';
import { CdkStepperModule } from '@angular/cdk/stepper';

@NgModule({
  imports: [
    CommonModule,
    A11yModule,
    OverlayModule,
    DragDropModule,
    PlatformModule,
    PortalModule,
    ObserversModule,
    CdkTableModule,
    CdkStepperModule,
  ],
  exports: [
    CommonModule,
    A11yModule,
    OverlayModule,
    DragDropModule,
    PlatformModule,
    PortalModule,
    ObserversModule,
    CdkTableModule,
    CdkStepperModule,
  ],
  schemas: [],
})
export class SharedCdkModule {}
