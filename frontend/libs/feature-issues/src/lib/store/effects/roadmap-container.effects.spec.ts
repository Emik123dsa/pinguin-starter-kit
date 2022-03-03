import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RoadmapContainerEffects } from './roadmap-container.effects';

describe('RoadmapContainerEffects', () => {
  let actions$: Observable<any>;
  let effects: RoadmapContainerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoadmapContainerEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(RoadmapContainerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
