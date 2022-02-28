/**
 * Issues fields entity.
 *
 * @export
 * @class IssuesFieldsEntity
 * @typedef {IssuesFieldsEntity}
 */
export class IssuesFieldsEntity {
  /**
   * Creates an instance of IssuesFieldsEntity.
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
    private labels: Array<number>,
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

  public getLabels(): Array<number> {
    return this.labels;
  }

  public getStartDate(): number {
    return this.startDate;
  }

  public getEndDate(): number {
    return this.endDate;
  }

  /**
   * Clone `issues-fields` entity.
   *
   * @public
   * @returns {IssuesFieldsEntity}
   */
  public clone(): IssuesFieldsEntity {
    return new IssuesFieldsEntity(
      this.id,
      this.title,
      this.summary,
      this.labels,
      this.startDate,
      this.endDate,
    );
  }
}
