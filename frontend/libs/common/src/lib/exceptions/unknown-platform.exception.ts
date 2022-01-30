/**
 * Description placeholder
 * @date 30.01.2022 - 01:04:19
 *
 * @export
 * @class UnknownPlatformException
 * @typedef {UnknownPlatformException}
 * @extends {Error}
 */
export class UnknownPlatformException extends Error {
  /**
   * Provide platform exception error code.
   *
   * @protected
   * @static
   * @type {string}
   */
  protected static ERROR_CODE: Readonly<string> = 'error.unknownPlatform';

  /**
   * Constructs a new runtime exception with the specified detail message.
   * The cause is not initialized, and may subsequently be initialized by a
   * call to {@link #initName}.
   *
   * @param message the detail message. The detail message is saved for
   *                later retrieval by the {@link #getMessage()} method.
   *
   *
   * @constructor
   * @public
   * @param {string} message
   */
  public constructor(message: string) {
    super(message);
    this.initName();
  }

  public initName(): void {
    this.name = this.constructor.name;
  }

  /**
   * Get error code of {@link UnknownPlatformException} exception.
   *
   * @public
   * @returns {Readonly<string>}
   */
  public getErrorCode(): Readonly<string> {
    return UnknownPlatformException.ERROR_CODE;
  }
}
