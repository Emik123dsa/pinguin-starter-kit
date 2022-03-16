import { TestBed } from '@angular/core/testing';

import { RxIssueService } from './rx-issue.service';

describe('RxIssueService', () => {
  let service: RxIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
