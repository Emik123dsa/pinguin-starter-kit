import { IssueEntity } from './issue.models';
import { issueAdapter, IssuePartialState, initialState } from './issue.reducer';
import * as IssueSelectors from './issue.selectors';

describe('Issue Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getIssueId = (it: IssueEntity) => it.id;
  const createIssueEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as IssueEntity);

  let state: IssuePartialState;

  beforeEach(() => {
    state = {
      issue: issueAdapter.setAll(
        [
          createIssueEntity('PRODUCT-AAA'),
          createIssueEntity('PRODUCT-BBB'),
          createIssueEntity('PRODUCT-CCC'),
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

  describe('Issue Selectors', () => {
    it('getAllIssue() should return the list of Issue', () => {
      const results = IssueSelectors.getAllIssue(state);
      const selId = getIssueId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = IssueSelectors.getSelected(state) as IssueEntity;
      const selId = getIssueId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getIssueLoaded() should return the current "loaded" status', () => {
      const result = IssueSelectors.getIssueLoaded(state);

      expect(result).toBe(true);
    });

    it('getIssueError() should return the current "error" state', () => {
      const result = IssueSelectors.getIssueError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
