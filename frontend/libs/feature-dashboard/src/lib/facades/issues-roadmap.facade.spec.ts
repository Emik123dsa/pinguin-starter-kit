import { TestBed } from '@angular/core/testing';

import { IssuesRoadmapFacade } from './issues-roadmap.facade';
describe('IssuesRoadmapFacade', () => {
  let facade: IssuesRoadmapFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuesRoadmapFacade],
    });

    facade = TestBed.inject(IssuesRoadmapFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
