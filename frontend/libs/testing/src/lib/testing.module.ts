import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RuntimeEnvironmentModule } from '@pinguin/environments';
import { ClientConfigModule } from '@pinguin/config';
import { ClientRestApiModule } from '@pinguin/api';

import { environment } from './mocks';

@NgModule({
  imports: [
    CommonModule,
    RuntimeEnvironmentModule.forRoot(environment),
    ClientConfigModule.forRoot(),
    HttpClientTestingModule,
    ClientRestApiModule,
  ],
  exports: [
    CommonModule,
    RuntimeEnvironmentModule,
    ClientConfigModule,
    HttpClientTestingModule,
    ClientRestApiModule,
  ],
})
export class ClientTestingModule {}
