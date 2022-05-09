import { TestBed } from '@angular/core/testing';

import { IssuesModule } from './issues.module';
describe('IssuesModule', () => {
  let facade: IssuesModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuesModule],
    });

    facade = TestBed.inject(IssuesModule);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
