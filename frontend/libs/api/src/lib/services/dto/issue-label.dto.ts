import { IssueFieldEntities, IssueFieldEntity } from '../../models';

/**
 * Issue field dto.
 * TODO: implement `dto` features.
 *
 * @export
 * @class IssueFieldDto
 * @typedef {IssueFieldDto}
 */
export class IssueLabelDto {
  /**
   * Set initial fields of label entities.
   *
   * @private
   * @type {IssueFieldEntities}
   */
  private fields!: IssueFieldEntities;

  /**
   * Fields ids of `IssueFieldEntity`.
   *
   * @private
   * @type {!Array<number>}
   */
  private fieldIds!: Array<number>;

  /**
   * Get field ids of `IssueLabelEntity`.
   *
   * @public
   * @returns {Array<number>}
   */
  public getFieldIds(): Array<number> {
    return this.fieldIds;
  }

  public getFields(): IssueFieldEntities {
    return this.fields;
  }
}
