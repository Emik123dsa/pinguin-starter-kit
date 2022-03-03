import { Observable } from 'rxjs';
import { IssuesFieldEntity, IssuesLabelEntity } from '../models';

/**
 * Reactive issues service for entities:
 * 1) {@link IssuesFieldEntity},
 * 2) {@link IssuesLabelEntity}.
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
   * @returns {Array<IssuesLabelEntity>}
   */
  public abstract findAllLabels(): Observable<Array<IssuesLabelEntity>>;

  /**
   * GET /api/v1/issues/{issueId}?/fields : get all labels of issues entity.
   *
   * @public
   * @abstract
   * @returns {Array<IssuesLabelEntity>}
   */
  public abstract findAllFields(): Observable<Array<IssuesFieldEntity>>;
}
