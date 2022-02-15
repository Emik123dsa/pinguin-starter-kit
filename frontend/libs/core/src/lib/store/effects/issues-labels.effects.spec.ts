import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { IssuesLabelsEffects } from './issues-labels.effects';

describe('IssuesLabelsEffects', () => {
  let actions$: Observable<any>;
  let effects: IssuesLabelsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuesLabelsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(IssuesLabelsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
