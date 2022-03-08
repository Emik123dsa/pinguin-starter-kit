/**
 * Issues label entities.
 *
 * @export
 * @typedef {IssuesLabelEntities}
 */
export type IssuesLabelEntities = Array<IssuesLabelEntity>;

/**
 * Issues labels entity.
 *
 * @export
 * @class IssuesLabelEntity
 * @typedef {IssuesLabelEntity}
 */
export class IssuesLabelEntity {
  /**
   * Creates an instance of IssuesLabelEntity.
   *
   * @constructor
   * @public
   * @param {string} id
   * @param {string} name
   */
  public constructor(private id: number, private name: string) {}

  // Get id of labels entity.
  public getId() {
    return this.id;
  }

  // Get name of labels entity.
  public getName() {
    return this.name;
  }

  /**
   * Clone `issues-label` entity.
   *
   * @public
   * @returns {IssuesLabelEntity}
   */
  public clone(): IssuesLabelEntity {
    return new IssuesLabelEntity(this.id, this.name);
  }
}
