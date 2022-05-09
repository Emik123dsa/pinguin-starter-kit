import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as IssueLabelActions from './issue-label.actions';
import { IssueLabelEffects } from './issue-label.effects';

describe('IssueLabelEffects', () => {
  let actions: Observable<Action>;
  let effects: IssueLabelEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        IssueLabelEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(IssueLabelEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: IssueLabelActions.init() });

      const expected = hot('-a-|', {
        a: IssueLabelActions.loadIssueLabelSuccess({ issueLabel: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
