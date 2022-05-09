/**
 * Shared object utils.
 *
 * @export
 * @class ObjectUtils
 * @typedef {ObjectUtils}
 */
export class ObjectUtils {
  /**
   * Whether object is empty or null;
   *
   * @public
   * @static
   * @param {object} object
   * @returns {boolean}
   */
  public static nonNull(value: unknown): boolean {
    return !this.isNull(value as object);
  }

  /**
   * Whether object is nullable/empty.
   *
   * @public
   * @static
   * @param {object} value
   */
  public static isNull(value: NonNullable<object>): boolean {
    return Object.keys(value).length === 0 && value.constructor === Object;
  }
}
