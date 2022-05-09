import { IssueLabelEntity } from './issue-label.models';
import {
  issueLabelAdapter,
  IssueLabelPartialState,
  initialState,
} from './issue-label.reducer';
import * as IssueLabelSelectors from './issue-label.selectors';

describe('IssueLabel Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getIssueLabelId = (it: IssueLabelEntity) => it.id;
  const createIssueLabelEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as IssueLabelEntity);

  let state: IssueLabelPartialState;

  beforeEach(() => {
    state = {
      issueLabel: issueLabelAdapter.setAll(
        [
          createIssueLabelEntity('PRODUCT-AAA'),
          createIssueLabelEntity('PRODUCT-BBB'),
          createIssueLabelEntity('PRODUCT-CCC'),
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

  describe('IssueLabel Selectors', () => {
    it('getAllIssueLabel() should return the list of IssueLabel', () => {
      const results = IssueLabelSelectors.getAllIssueLabel(state);
      const selId = getIssueLabelId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = IssueLabelSelectors.getSelected(state) as IssueLabelEntity;
      const selId = getIssueLabelId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getIssueLabelLoaded() should return the current "loaded" status', () => {
      const result = IssueLabelSelectors.getIssueLabelLoaded(state);

      expect(result).toBe(true);
    });

    it('getIssueLabelError() should return the current "error" state', () => {
      const result = IssueLabelSelectors.getIssueLabelError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
