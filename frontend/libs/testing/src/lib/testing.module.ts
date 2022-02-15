import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClientEnvironmentModule } from '@pinguin/environment';
import { ClientConfigModule } from '@pinguin/config';
import { ClientRestApiModule } from '@pinguin/api';

import { environment } from './mocks';

@NgModule({
  imports: [
    CommonModule,
    ClientEnvironmentModule.forRoot(environment),
    ClientConfigModule.forRoot(),
    HttpClientTestingModule,
    ClientRestApiModule,
  ],
  exports: [
    CommonModule,
    ClientEnvironmentModule,
    ClientConfigModule,
    HttpClientTestingModule,
    ClientRestApiModule,
  ],
})
export class ClientTestingModule {}
