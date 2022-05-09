import { FactoryProvider, SkipSelf, Version } from '@angular/core';
import {
  ClientEnvironmentOptions,
  CLIENT_ENVIRONMENT_OPTIONS,
} from '@pinguin/environments';

import { ClientApplicationOptions } from '../interfaces';
import { ClientApplicationConfigRef } from '../classes/app-config.ref';

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

  public override getConfigUrl(): Optional<string> {
    return this.options.configUrl || null;
  }

  public override getModules(): Optional<Map<string, string>> {
    return this.options.modules || null;
  }
}

function clientApplicationConfigProviderFactory(
  options: ClientEnvironmentOptions,
): ClientApplicationConfigRef {
  return new ClientApplicationConfig(options.app);
}

// FactoryProvider for client app config.
export const CLIENT_APP_CONFIG_PROVIDER: FactoryProvider = {
  provide: ClientApplicationConfigRef,
  useFactory: clientApplicationConfigProviderFactory,
  deps: [[new SkipSelf(), CLIENT_ENVIRONMENT_OPTIONS]],
  multi: false,
};
