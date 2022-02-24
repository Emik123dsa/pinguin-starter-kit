import * as format from 'string-format';

declare global {
  interface String {
    format(...replacement: unknown[]): string;
  }
}

/**
 * String utils static class.
 *
 * @export
 * @class StringUtils
 */
export class StringUtils {
  /**
   * Empty of string utils.
   */
  public static readonly EMPTY = '';

  /**
   * Format string utils function.
   *
   * @static method.
   * @param  {string} value of input, which will be invoked.
   * @param  {PlainObjectLiteral} replacement a pattern for replacing.
   * @return {string} an instance of `typeof string`.
   * @memberof StringUtils
   */
  public static format<T>(value: string, replacement: T): string {
    <void>this.initPrototypeFormat();
    return format(value, replacement);
  }

  /**
   * Init format extending prototype for `String.prototype`.
   *
   * @private `fn()` to initialize format string.
   * @static method.
   * @return {void}
   * @memberof StringUtils
   */
  private static initPrototypeFormat(): void {
    if (Object.is(typeof String.prototype.format, 'function')) return;
    void format.extend(String.prototype, {});
  }
}
