import { IssueFieldEntity } from './issue-field.models';
import {
  issueFieldAdapter,
  IssueFieldPartialState,
  initialState,
} from './issue-field.reducer';
import * as IssueFieldSelectors from './issue-field.selectors';

describe('IssueField Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getIssueFieldId = (it: IssueFieldEntity) => it.id;
  const createIssueFieldEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as IssueFieldEntity);

  let state: IssueFieldPartialState;

  beforeEach(() => {
    state = {
      issueField: issueFieldAdapter.setAll(
        [
          createIssueFieldEntity('PRODUCT-AAA'),
          createIssueFieldEntity('PRODUCT-BBB'),
          createIssueFieldEntity('PRODUCT-CCC'),
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

  describe('IssueField Selectors', () => {
    it('getAllIssueField() should return the list of IssueField', () => {
      const results = IssueFieldSelectors.getAllIssueField(state);
      const selId = getIssueFieldId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = IssueFieldSelectors.getSelected(state) as IssueFieldEntity;
      const selId = getIssueFieldId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getIssueFieldLoaded() should return the current "loaded" status', () => {
      const result = IssueFieldSelectors.getIssueFieldLoaded(state);

      expect(result).toBe(true);
    });

    it('getIssueFieldError() should return the current "error" state', () => {
      const result = IssueFieldSelectors.getIssueFieldError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
