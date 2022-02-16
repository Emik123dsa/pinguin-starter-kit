import { TestBed } from '@angular/core/testing';

import { InMemoryRestApiDataService } from './in-memory-api-data.service';

describe('InMemoryRestApiDataService', () => {
  let service: InMemoryRestApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryRestApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
