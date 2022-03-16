import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from '@pinguin/shared';

import { ErrorsRoutingModule } from './feature-errors-routing.module';

import { ErrorsLayoutComponent } from './layouts/errors-layout';
import { NotFoundContainerComponent } from './containers/not-found-container';

@NgModule({
  declarations: [ErrorsLayoutComponent, NotFoundContainerComponent],
  imports: [SharedModule.forRoot(), ErrorsRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureErrorsModule {}
