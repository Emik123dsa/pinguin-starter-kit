import { TestBed } from '@angular/core/testing';
import { ISSUES_MODULE_INITIALIZER_PROVIDER } from '../providers';

import { ISSUES_MODULE_INITIALIZER } from '../tokens';
import { IssuesModuleHandler } from './issues.module.handler';

describe('IssuesModuleHandler', () => {
  let service: IssuesModuleHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ISSUES_MODULE_INITIALIZER_PROVIDER],
    });

    service = TestBed.inject(ISSUES_MODULE_INITIALIZER) as IssuesModuleHandler;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
