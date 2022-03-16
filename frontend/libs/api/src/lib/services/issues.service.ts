import { Observable } from 'rxjs';
import { IssueFieldEntity, IssueLabelEntity } from '../models';

/**
 * Reactive issues service for entities:
 * 1) {@link IssueFieldEntity},
 * 2) {@link IssueLabelEntity}.
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
   * @returns {Array<IssueLabelEntity>}
   */
  public abstract findAllLabels(): Observable<Array<IssueLabelEntity>>;

  /**
   * GET /api/v1/issues/{issueId}?/fields : get all labels of issues entity.
   *
   * @public
   * @abstract
   * @returns {Array<IssueLabelEntity>}
   */
  public abstract findAllFields(): Observable<Array<IssueFieldEntity>>;
}
