import { Action } from '@ngrx/store';

import * as IssueActions from './issue.actions';
import { IssueEntity } from './issue.models';
import { State, initialState, reducer } from './issue.reducer';

describe('Issue Reducer', () => {
  const createIssueEntity = (id: string, name = ''): IssueEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Issue actions', () => {
    it('loadIssueSuccess should return the list of known Issue', () => {
      const issue = [
        createIssueEntity('PRODUCT-AAA'),
        createIssueEntity('PRODUCT-zzz'),
      ];
      const action = IssueActions.loadIssueSuccess({ issue });

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
