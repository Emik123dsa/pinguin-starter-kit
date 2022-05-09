import { IssuesEntity } from './issues.models';
import {
  issuesAdapter,
  IssuesPartialState,
  initialState,
} from './issues.reducer';
import * as IssuesSelectors from './issues.selectors';

describe('Issues Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getIssuesId = (it: IssuesEntity) => it.id;
  const createIssuesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as IssuesEntity);

  let state: IssuesPartialState;

  beforeEach(() => {
    state = {
      issues: issuesAdapter.setAll(
        [
          createIssuesEntity('PRODUCT-AAA'),
          createIssuesEntity('PRODUCT-BBB'),
          createIssuesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        },
      ),
    };
  });

  describe('Issues Selectors', () => {
    it('getAllIssues() should return the list of Issues', () => {
      const results = IssuesSelectors.getAllIssues(state);
      const selId = getIssuesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = IssuesSelectors.getSelected(state) as IssuesEntity;
      const selId = getIssuesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getIssuesLoaded() should return the current "loaded" status', () => {
      const result = IssuesSelectors.getIssuesLoaded(state);

      expect(result).toBe(true);
    });

    it('getIssuesError() should return the current "error" state', () => {
      const result = IssuesSelectors.getIssuesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
