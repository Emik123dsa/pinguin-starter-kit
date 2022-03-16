/**
 * Issue label entities.
 *
 * @export
 * @typedef {IssueLabelEntities}
 */
export type IssueLabelEntities = Array<IssueLabelEntity>;

/**
 * Issue labels entity.
 *
 * @export
 * @class IssueLabelEntity
 * @typedef {IssueLabelEntity}
 */
export class IssueLabelEntity {
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
   * @returns {IssueLabelEntity}
   */
  public clone(): IssueLabelEntity {
    return new IssueLabelEntity(this.id, this.name);
  }
}
