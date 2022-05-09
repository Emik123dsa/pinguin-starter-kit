import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from '@pinguin/shared';

import { ErrorsRoutingModule } from './feature-errors-routing.module';

import { ErrorsLayoutComponent } from './layout/errors-layout';
import { NotFoundContainerComponent } from './containers/not-found';

@NgModule({
  declarations: [ErrorsLayoutComponent, NotFoundContainerComponent],
  imports: [SharedModule.forRoot(), ErrorsRoutingModule],
  schemas: [],
})
export class FeatureErrorsModule {}
