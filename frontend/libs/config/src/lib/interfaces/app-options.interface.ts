import { Version } from '@angular/core';

export interface ClientApplicationOptions {
  id: string;
  name: string;
  version: Version;
  configUrl?: Optional<string>;
  modules?: Map<string, string>;
}
