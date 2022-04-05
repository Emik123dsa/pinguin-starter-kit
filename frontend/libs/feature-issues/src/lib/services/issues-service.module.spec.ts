import { TestBed } from '@angular/core/testing';

import { IssuesServiceModule } from './issues-service.module';

describe('IssuesServiceModule', () => {
  let facade: IssuesServiceModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuesServiceModule],
    });

    facade = TestBed.inject(IssuesServiceModule);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
