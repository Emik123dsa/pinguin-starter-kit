import { TestBed } from '@angular/core/testing';

import { IssueServiceModule } from './issue-service.module';

describe('IssueServiceModule', () => {
  let facade: IssueServiceModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueServiceModule],
    });

    facade = TestBed.inject(IssueServiceModule);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
