import { Action } from '@ngrx/store';

import * as IssueFieldActions from './issue-field.actions';
import { IssueFieldEntity } from './issue-field.models';
import { State, initialState, reducer } from './issue-field.reducer';

describe('IssueField Reducer', () => {
  const createIssueFieldEntity = (id: string, name = ''): IssueFieldEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid IssueField actions', () => {
    it('loadIssueFieldSuccess should return the list of known IssueField', () => {
      const issueField = [
        createIssueFieldEntity('PRODUCT-AAA'),
        createIssueFieldEntity('PRODUCT-zzz'),
      ];
      const action = IssueFieldActions.loadIssueFieldSuccess({ issueField });

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
