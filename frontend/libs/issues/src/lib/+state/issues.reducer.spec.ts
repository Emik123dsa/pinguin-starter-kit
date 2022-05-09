import { Action } from '@ngrx/store';

import * as IssuesActions from './issues.actions';
import { IssuesEntity } from './issues.models';
import { State, initialState, reducer } from './issues.reducer';

describe('Issues Reducer', () => {
  const createIssuesEntity = (id: string, name = ''): IssuesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Issues actions', () => {
    it('loadIssuesSuccess should return the list of known Issues', () => {
      const issues = [
        createIssuesEntity('PRODUCT-AAA'),
        createIssuesEntity('PRODUCT-zzz'),
      ];
      const action = IssuesActions.loadIssuesSuccess({ issues });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
