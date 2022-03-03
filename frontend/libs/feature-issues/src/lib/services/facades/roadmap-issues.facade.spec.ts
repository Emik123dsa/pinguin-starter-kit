import { TestBed } from '@angular/core/testing';

import { RoadmapIssuesFacade } from './roadmap-issues.facade';
describe('RoadmapIssuesFacade', () => {
  let facade: RoadmapIssuesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoadmapIssuesFacade],
    });

    facade = TestBed.inject(RoadmapIssuesFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
