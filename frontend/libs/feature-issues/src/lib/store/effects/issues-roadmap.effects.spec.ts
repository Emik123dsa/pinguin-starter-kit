import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { IssuesRoadmapEffects } from './issues-roadmap.effects';

describe('IssuesRoadmapEffects', () => {
  let actions$: Observable<any>;
  let effects: IssuesRoadmapEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuesRoadmapEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(IssuesRoadmapEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
