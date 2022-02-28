import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RoadmapPageEffects } from './roadmap-page.effects';

describe('RoadmapPageEffects', () => {
  let actions$: Observable<any>;
  let effects: RoadmapPageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoadmapPageEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(RoadmapPageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
