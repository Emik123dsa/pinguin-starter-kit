import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as IssuesActions from './issues.actions';
import { IssuesEffects } from './issues.effects';

describe('IssuesEffects', () => {
  let actions: Observable<Action>;
  let effects: IssuesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        IssuesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(IssuesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: IssuesActions.init() });

      const expected = hot('-a-|', {
        a: IssuesActions.loadIssuesSuccess({ issues: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
