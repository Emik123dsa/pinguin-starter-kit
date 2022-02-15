import { IssuesFieldsEntity, IssuesLabelsEntity } from '../models';

/**
 * Reactive issues service for entities:
 * 1) {@link IssuesFieldsEntity},
 * 2) {@link IssuesLabelsEntity}.
 *
 * @export
 * @abstract
 * @class IssuesService
 * @typedef {IssuesService}
 */
export abstract class IssuesService {
  /**
   * GET /api/v1/issues/{issueId}?/labels : get all labels of issues entity.
   *
   * @public
   * @abstract
   * @returns {Array<IssuesLabelsEntity>}
   */
  public abstract findAllLabels(): Array<IssuesLabelsEntity>;

  /**
   * GET /api/v1/issues/{issueId}?/fields : get all labels of issues entity.
   *
   * @public
   * @abstract
   * @returns {Array<IssuesLabelsEntity>}
   */
  public abstract findAllFields(): Array<IssuesFieldsEntity>;
}
