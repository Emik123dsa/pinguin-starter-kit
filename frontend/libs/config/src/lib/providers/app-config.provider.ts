import { FactoryProvider, Version } from '@angular/core';
import {
  ClientApplicationOptions,
  ClientEnvironmentOptions,
  CLIENT_ENVIRONMENT_OPTIONS,
} from '@pinguin/environment';
import { ClientApplicationConfigRef } from '../app-config-ref';

/**
 * Client application config.
 */
export class ClientApplicationConfig extends ClientApplicationConfigRef {
  /**
   * Constructs an instance of ClientApplicationConfigRef.
   *
   * @param  {ClientApplicationOptions} options
   * @memberof ClientApplicationConfigRef
   */
  public constructor(private readonly options: ClientApplicationOptions) {
    super();
  }

  public override getId(): string {
    return this.options.id;
  }

  public override getName(): string {
    return this.options.name;
  }

  public override getVersion(): Version {
    return this.options.version;
  }
}

// FactoryProvider for client app config.
export const CLIENT_APP_CONFIG_PROVIDER: FactoryProvider = {
  provide: ClientApplicationConfigRef,
  useFactory: (options: ClientEnvironmentOptions) => {
    return new ClientApplicationConfig(options.app);
  },
  deps: [CLIENT_ENVIRONMENT_OPTIONS],
  multi: false,
};
