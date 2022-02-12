/**
 * Unknown Api Error Exception.
 *
 * @export
 * @class UnknownApiErrorException
 * @extends Error
 */
export class UnknownApiErrorException extends Error {
  private static readonly ERROR_CODE = 'error.apiUnknown';

  public override message!: string;

  public constructor(message: string) {
    super(message);
    this.message = message;
  }

  public getMessage(): string {
    return this.message;
  }

  public getErrorCode(): string {
    return UnknownApiErrorException.ERROR_CODE;
  }
}
