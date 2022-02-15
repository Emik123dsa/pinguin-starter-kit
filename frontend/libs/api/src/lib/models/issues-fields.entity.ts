/**
 * Issues fields entity.
 *
 * @export
 * @class IssuesFieldsEntity
 * @typedef {IssuesFieldsEntity}
 */
export class IssuesFieldsEntity {
  public id!: number;

  public title!: string;

  public summary?: string;

  public labels: Array<number> = new Array<number>();

  private startDate!: string;

  private endDate!: string;

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

  public getStartDate(): string {
    return this.startDate;
  }

  public getEndDate(): string {
    return this.endDate;
  }
}
