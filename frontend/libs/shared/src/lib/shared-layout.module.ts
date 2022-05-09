import { NgModule } from '@angular/core';

import { SharedCdkModule } from './shared-cdk.module';

import { FooterLayoutComponent } from './layout/footer';
import { HeaderLayoutComponent } from './layout/header';
import { WrapperLayoutComponent } from './layout/wrapper';

import { ContainerComponent } from './components/container';

@NgModule({
  imports: [SharedCdkModule],
  declarations: [
    // Provide components and layouts.
    WrapperLayoutComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,
    ContainerComponent,
  ],
  exports: [
    // Export components and layouts.
    WrapperLayoutComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,
    ContainerComponent,
  ],
})
export class SharedLayoutModule {}
