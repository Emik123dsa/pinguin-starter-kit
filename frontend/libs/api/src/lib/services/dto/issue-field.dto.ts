import { IssueLabelEntities, IssueLabelEntity } from '../../models';

/**
 * Issue field dto.
 * TODO: implement `dto` features.
 *
 * @export
 * @class IssueFieldDto
 * @typedef {IssueFieldDto}
 */
export class IssueFieldDto {
  /**
   * Set initial labels of field entities.
   *
   * @private
   * @type {IssueLabelEntities}
   */
  private labels!: IssueLabelEntities;

  /**
   * Get labels of field dto.
   *
   * @public
   * @returns {IssueLabelEntities}
   */
  public getLabels(): IssueLabelEntities {
    return this.labels;
  }
}
