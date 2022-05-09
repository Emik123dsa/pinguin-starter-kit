import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as IssueFieldActions from './issue-field.actions';
import { IssueFieldEffects } from './issue-field.effects';

describe('IssueFieldEffects', () => {
  let actions: Observable<Action>;
  let effects: IssueFieldEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        IssueFieldEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(IssueFieldEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: IssueFieldActions.init() });

      const expected = hot('-a-|', {
        a: IssueFieldActions.loadIssueFieldSuccess({ issueField: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
