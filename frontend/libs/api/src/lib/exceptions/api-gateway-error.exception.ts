/**
 *
 * @export
 * @class ApiGatewayErrorException
 * @extends Error
 */
export class ApiGatewayErrorException extends Error {
  private static readonly ERROR_CODE = 'error.apiGateway';

  public override message!: string;

  public constructor(message: string, public readonly status: number | string) {
    super();
    this.initMessage(message);
    this.initName();
  }

  public initMessage(message: string) {
    this.message = message;
  }

  public initName() {
    this.name = this.constructor.name;
  }

  public getMessage(): string {
    return this.message;
  }

  public getErrorCode(): string {
    return ApiGatewayErrorException.ERROR_CODE;
  }
}
