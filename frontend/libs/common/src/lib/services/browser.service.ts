import * as format from 'string-format';

export abstract class BrowserService {
  /**
   * Implements a simple runnable service for initializing browser application.
   * Will be executed only in the browser runtime, once app is ready to start.
   *
   * @return {void}
   * @memberof BrowserService
   */
  public ngBrowserInit(): void {
    throw new ReferenceError(
      format('{name} was not implemented', BrowserService),
    );
  }
}
