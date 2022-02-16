import { Injectable } from '@angular/core';

import {
  getStatusText,
  InMemoryDbService,
  ParsedRequestUrl,
  RequestInfo,
  RequestInfoUtilities,
  ResponseOptions,
  STATUS,
} from 'angular-in-memory-web-api';


// HttpClientInMemoryWebApiModule.forRoot(
//   InMemoryWebApiDataService,
//   inMemoryWebApiOptionsFactory(options),
// ),


@Injectable({
  providedIn: 'root',
})
export class InMemoryRestApiDataService implements InMemoryDbService {
  // constructor() {}

  public async createDb() {
    return {};
  }
}
