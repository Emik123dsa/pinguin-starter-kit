/**
 * Issues labels entity.
 *
 * @export
 * @class IssuesLabelsEntity
 * @typedef {IssuesLabelsEntity}
 */
export class IssuesLabelsEntity {
  /**
   * Creates an instance of IssuesLabelsEntity.
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
}
