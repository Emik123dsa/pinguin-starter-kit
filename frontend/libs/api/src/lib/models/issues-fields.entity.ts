/**
 * Issues field entities.
 *
 * @export
 * @typedef {IssuesFieldEntities}
 */
export type IssuesFieldEntities = Array<IssuesFieldEntity>;

/**
 * Issues fields entity.
 *
 * @export
 * @class IssuesFieldEntity
 * @typedef {IssuesFieldEntity}
 */
export class IssuesFieldEntity {
  /**
   * Creates an instance of IssuesFieldEntity.
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
   * @returns {IssuesFieldEntity}
   */
  public clone(): IssuesFieldEntity {
    return new IssuesFieldEntity(
      this.id,
      this.title,
      this.summary,
      this.labelIds,
      this.startDate,
      this.endDate,
    );
  }
}
