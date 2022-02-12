import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ClientSharedModule } from '@pinguin/shared';

import { ClientErrorRoutingModule } from './error-routing.module';

import { ErrorLayoutComponent } from './containers/error-layout/error-layout.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';

@NgModule({
  declarations: [ErrorLayoutComponent, NotFoundPageComponent],
  imports: [ClientSharedModule, ClientErrorRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientErrorModule {}
