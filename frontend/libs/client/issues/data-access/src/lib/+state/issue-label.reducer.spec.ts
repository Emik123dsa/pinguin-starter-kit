import { Action } from '@ngrx/store';

import * as IssueLabelActions from './issue-label.actions';
import { IssueLabelEntity } from './issue-label.models';
import { State, initialState, reducer } from './issue-label.reducer';

describe('IssueLabel Reducer', () => {
  const createIssueLabelEntity = (id: string, name = ''): IssueLabelEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid IssueLabel actions', () => {
    it('loadIssueLabelSuccess should return the list of known IssueLabel', () => {
      const issueLabel = [
        createIssueLabelEntity('PRODUCT-AAA'),
        createIssueLabelEntity('PRODUCT-zzz'),
      ];
      const action = IssueLabelActions.loadIssueLabelSuccess({ issueLabel });

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
