import format from 'string-format';
import { ClientConnectOptions } from '@pinguin/environment';

/**
 * Abstract connect options.
 */
export abstract class AbstractConnection<T extends ClientConnectOptions> {
  /**
   * Creates an instance of AbstractConnection.
   *
   * @param  {T} options
   * @memberof AbstractConnection
   */
  public constructor(protected readonly options: T) {}

  /**
   * Gets Base Url.
   *
   * @returns {string} base url.
   */
  public getBaseUrl(): URL {
    const baseEndpoint: string = format(
      '/{prefix}/{version}/',
      this.options.baseUrl
    );

    return new URL(this.getBaseDomain() + baseEndpoint);
  }

  /**
   * Gets Base Domain.
   *
   * @returns {string} base domain.
   */
  public getBaseDomain(): string {
    return format('{scheme}://{hostname}:{port}', this.options.baseUrl);
  }
}
