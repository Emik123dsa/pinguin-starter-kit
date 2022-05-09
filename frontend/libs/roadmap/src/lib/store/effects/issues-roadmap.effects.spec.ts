import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { IssuesRoadmapContainerEffects } from './issues-roadmap.effects';

describe('IssuesRoadmapEffects', () => {
  let actions$: Observable<any>;
  let effects: IssuesRoadmapContainerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IssuesRoadmapContainerEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(IssuesRoadmapContainerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
