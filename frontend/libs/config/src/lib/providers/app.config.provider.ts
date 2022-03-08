import { FactoryProvider, Self, Version } from '@angular/core';
import {
  ClientEnvironmentOptions,
  CLIENT_ENVIRONMENT_OPTIONS,
} from '@pinguin/environments';

import { ClientApplicationOptions } from '../interfaces';
import { ClientApplicationConfigRef } from '../classes/app.config.ref';

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

function clientAppConfigProviderFactory(
  options: ClientEnvironmentOptions,
): ClientApplicationConfigRef {
  return new ClientApplicationConfig(options.app);
}

// FactoryProvider for client app config.
export const CLIENT_APP_CONFIG_PROVIDER: FactoryProvider = {
  provide: ClientApplicationConfigRef,
  useFactory: clientAppConfigProviderFactory,
  deps: [[new Self(), CLIENT_ENVIRONMENT_OPTIONS]],
  multi: false,
};
