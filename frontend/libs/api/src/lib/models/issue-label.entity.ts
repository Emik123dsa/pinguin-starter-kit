import { IssueFieldEntities, IssueFieldEntity } from './issue-field.entity';

/**
 * Issue label entities.
 *
 * @export
 * @typedef {IssueLabelEntities}
 */
export type IssueLabelEntities = Array<IssueLabelEntity>;

/**
 * Issue label entity.
 *
 * @export
 * @class IssueLabelEntity
 * @typedef {IssueLabelEntity}
 */
export class IssueLabelEntity {
  /**
   * Fields ids of `IssueFieldEntity`.
   *
   * @private
   * @type {!Array<number>}
   */
  private fieldIds!: Array<number>;

  /**
   * Set initial fields of label entities.
   *
   * @private
   * @type {IssueFieldEntities}
   */
  private fields!: IssueFieldEntities;

  /**
   * Creates an instance of IssueLabelEntity.
   *
   * @constructor
   * @public
   * @param {string} id
   * @param {string} name
   */
  public constructor(private id: number, private name: string) {}

  // Get id of labels entity.
  public getId(): number {
    return this.id;
  }

  /**
   * Get field ids of `IssueLabelEntity`.
   *
   * @public
   * @returns {Array<number>}
   */
  public getFieldIds(): Array<number> {
    return this.fieldIds;
  }

  public setFieldIds(value: number[]): void {
    this.fieldIds = value;
  }

  public getFields(): IssueFieldEntities {
    return this.fields;
  }

  public setFields(value: IssueFieldEntities): void {
    this.fields = value;
  }

  // Get name of labels entity.
  public getName(): string {
    return this.name;
  }

  /**
   * Clone `issues-label` entity.
   * TODO: should be implemented builder pattern here, or using simple setting strategy will be fine.
   *
   * @public
   * @returns {IssueLabelEntity}
   */
  public clone(): IssueLabelEntity {
    return new IssueLabelEntity(this.id, this.name);
  }
}
