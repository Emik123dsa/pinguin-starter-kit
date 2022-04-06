import { FactoryProvider, SkipSelf, Version } from '@angular/core';
import {
  ClientEnvironmentOptions,
  CLIENT_ENVIRONMENT_OPTIONS,
} from '@pinguin/environments';

import { ClientAppOptions } from '../interfaces';
import { ClientAppConfigRef } from '../classes/app.config.ref';

/**
 * Client application config.
 */
export class ClientAppConfig extends ClientAppConfigRef {
  /**
   * Constructs an instance of ClientAppConfigRef.
   *
   * @param  {ClientAppOptions} options
   * @memberof ClientAppConfigRef
   */
  public constructor(private readonly options: ClientAppOptions) {
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

  public override getConfigUrl(): Optional<string> {
    return this.options.configUrl || null;
  }

  public override getModules(): Optional<Map<string, string>> {
    return this.options.modules || null;
  }
}

function clientAppConfigProviderFactory(
  options: ClientEnvironmentOptions,
): ClientAppConfigRef {
  return new ClientAppConfig(options.app);
}

// FactoryProvider for client app config.
export const CLIENT_APP_CONFIG_PROVIDER: FactoryProvider = {
  provide: ClientAppConfigRef,
  useFactory: clientAppConfigProviderFactory,
  deps: [[new SkipSelf(), CLIENT_ENVIRONMENT_OPTIONS]],
  multi: false,
};
