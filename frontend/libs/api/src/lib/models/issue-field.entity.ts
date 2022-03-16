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
export class IssueFieldEntity {
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
    private id: number,
    private title: string,
    private summary: string,
    private labelIds: Array<number>,
    private startDate: number,
    private endDate: number,
  ) {}

  public getId(): number {
    return this.id;
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
