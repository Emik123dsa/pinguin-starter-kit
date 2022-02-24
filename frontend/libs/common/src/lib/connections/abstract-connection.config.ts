import { StringUtils } from '@pinguin/utils';
import { ClientConnectionOptions } from './client-connection.interface';

/**
 * Abstract connect options.
 */
export abstract class AbstractConnectionConfig<
  T extends ClientConnectionOptions,
> {
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
    const baseEndpoint: string = StringUtils.format(
      '/{prefix}/{version}/',
      this.options.baseUrl,
    );

    return new URL(this.getBaseDomain() + baseEndpoint);
  }

  /**
   * Gets Base Domain.
   *
   * @returns {string} base domain.
   */
  public getBaseDomain(): string {
    return StringUtils.format(
      '{scheme}://{hostname}:{port}',
      this.options.baseUrl,
    );
  }
}
