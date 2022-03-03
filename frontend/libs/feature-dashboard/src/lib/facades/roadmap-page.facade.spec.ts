import { TestBed } from '@angular/core/testing';

import { RoadmapPageFacade } from './roadmap-page.facade';
describe('RoadmapPageFacade', () => {
  let facade: RoadmapPageFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoadmapPageFacade],
    });

    facade = TestBed.inject(RoadmapPageFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
