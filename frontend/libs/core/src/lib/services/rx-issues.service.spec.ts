import { TestBed } from '@angular/core/testing';

import { RxIssuesService } from './rx-issues.service';

describe('RxIssuesService', () => {
  let service: RxIssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxIssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
