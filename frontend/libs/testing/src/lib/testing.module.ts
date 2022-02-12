import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientEnvironmentModule } from '@pinguin/environment';
import { ClientConfigModule } from '@pinguin/config';
import { ClientApiModule } from '@pinguin/api';

import { environment } from './mocks';

@NgModule({
  imports: [
    CommonModule,
    ClientEnvironmentModule.forRoot(environment),
    ClientConfigModule.forRoot(),
    ClientApiModule,
  ],
  exports: [
    CommonModule,
    ClientEnvironmentModule,
    ClientConfigModule,
    ClientApiModule,
  ],
})
export class ClientTestingModule {}
