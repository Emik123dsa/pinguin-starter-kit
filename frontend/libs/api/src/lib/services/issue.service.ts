import { Observable } from 'rxjs';
import { IssueFieldEntity, IssueLabelEntity } from '../models';

/**
 * Reactive issues service for entities:
 * 1) {@link IssueFieldEntity},
 * 2) {@link IssueLabelEntity}.
 *
 * @export
 * @abstract
 * @class IssueService
 * @typedef {IssueService}
 */
export abstract class IssueService {
  /**
   * GET /api/v1/issues/labels : get all labels of issues entity.
   *
   * @public
   * @abstract
   * @returns {Array<IssueLabelEntity>}
   */
  public abstract findAllLabels(): Observable<Array<IssueLabelEntity>>;

  /**
   * GET /api/v1/issues/fields : get all labels of issues entity.
   *
   * @public
   * @abstract
   * @returns {Array<IssueLabelEntity>}
   */
  public abstract findAllFields(): Observable<Array<IssueFieldEntity>>;
}
