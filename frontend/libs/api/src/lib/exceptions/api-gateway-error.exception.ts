/**
 *
 * @export
 * @class ApiGatewayErrorException
 * @extends Error
 */
export class ApiGatewayErrorException extends Error {
  private static readonly ERROR_CODE = 'error.apiGateway';

  public override message!: string;

  public constructor(message: string) {
    super(message);
    this.message = message;
  }

  public getMessage(): string {
    return this.message;
  }

  public getErrorCode(): string {
    return ApiGatewayErrorException.ERROR_CODE;
  }
}
