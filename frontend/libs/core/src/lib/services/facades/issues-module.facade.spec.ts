import { TestBed } from '@angular/core/testing';

import { IssuesModuleFacade } from './issues-module.facade';
describe('IssuesModuleFacade', () => {
  let facade: IssuesModuleFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuesModuleFacade],
    });

    facade = TestBed.inject(IssuesModuleFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
