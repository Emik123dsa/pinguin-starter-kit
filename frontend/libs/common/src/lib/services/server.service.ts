import format from 'string-format';

export abstract class ServerService {
  /**
   * Implements a simple runnable service for initializing server application.
   * Will be executed only in the server runtime, once app is ready to start.
   *
   * @return {void}
   * @memberof ServerService
   */
  public ngServerInit(): void {
    throw new ReferenceError(
      format('{name} was not implemented', ServerService)
    );
  }
}
