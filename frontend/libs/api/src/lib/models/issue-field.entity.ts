import { Entity } from '@pinguin/entity';
import { StringUtils } from '@pinguin/utils';
import { IssueLabelEntities } from './issue-label.entity';

/**
 * Issue field entities.
 *
 * @export
 * @typedef {IssueFieldEntities}
 */
export type IssueFieldEntities = Array<IssueFieldEntity>;

/**
 * Issue field entity.
 *
 * @export
 * @class IssueFieldEntity
 * @typedef {IssueFieldEntity}
 */
export class IssueFieldEntity extends Entity {
  /**
   * Set initial labels of field entities.
   *
   * @private
   * @type {IssueLabelEntities}
   */
  private labels!: IssueLabelEntities;

  /**
   * Creates an instance of IssueFieldEntity.
   *
   * @constructor
   * @public
   * @param {number} id
   * @param {string} title
   * @param {string} summary
   * @param {Array<number>} labels
   * @param {string} startDate
   * @param {string} endDate
   */
  public constructor(
    public readonly id: number,
    private title: string,
    private summary: string = StringUtils.EMPTY,
    private labelIds: Array<number>,
    private startDate: number,
    private endDate: number,
  ) {
    super();
  }

  public getId(): number {
    return this.id;
  }

  public getLabels(): IssueLabelEntities {
    return this.labels;
  }

  public setLabels(value: IssueLabelEntities) {
    this.labels = value;
  }

  public getTitle(): string {
    return this.title;
  }

  public getSummary() {
    return this.summary;
  }

  public getLabelIds(): Array<number> {
    return this.labelIds;
  }

  public setLabelIds(value: Array<number>) {
    this.labelIds = value;
  }

  public getStartDate(): number {
    return this.startDate;
  }

  public getEndDate(): number {
    return this.endDate;
  }

  /**
   * Clone `issues-field` entity.
   *
   * @public
   * @returns {IssueFieldEntity}
   */
  public clone(): IssueFieldEntity {
    return new IssueFieldEntity(
      this.id,
      this.title,
      this.summary,
      this.labelIds,
      this.startDate,
      this.endDate,
    );
  }
}
