import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from '@pinguin/shared';

import { ErrorRoutingModule } from './error-routing.module';

import { ErrorLayoutComponent } from './containers/error-layout/error-layout.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';

@NgModule({
  declarations: [ErrorLayoutComponent, NotFoundPageComponent],
  imports: [SharedModule, ErrorRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ErrorModule {}
