import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as IssueActions from './issue.actions';
import { IssueEffects } from './issue.effects';

describe('IssueEffects', () => {
  let actions: Observable<Action>;
  let effects: IssueEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        IssueEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(IssueEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: IssueActions.init() });

      const expected = hot('-a-|', {
        a: IssueActions.loadIssueSuccess({ issue: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
