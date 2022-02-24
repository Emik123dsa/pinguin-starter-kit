import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from '@pinguin/shared';

import { ErrorsRoutingModule } from './feature-errors-routing.module';

import { ErrorsLayoutComponent } from './containers/errors-layout';
import { NotFoundPageComponent } from './containers/not-found-page';

@NgModule({
  declarations: [ErrorsLayoutComponent, NotFoundPageComponent],
  imports: [SharedModule.forRoot(), ErrorsRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureErrorsModule {}
