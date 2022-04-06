import { Version } from '@angular/core';

/**
 * Client application config ref.
 */
export abstract class ClientAppConfigRef {
  public abstract getId(): string;

  public abstract getName(): string;

  public abstract getVersion(): Version;

  public abstract getConfigUrl(): Optional<string>;

  public abstract getModules(): Optional<Map<string, string>>;
}
