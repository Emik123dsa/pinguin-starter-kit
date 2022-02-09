import { Version } from '@angular/core';

/**
 * Client application config ref.
 */
export abstract class ClientApplicationConfigRef {
  public abstract getId(): string;

  public abstract getName(): string;

  public abstract getVersion(): Version;
}
