import { InjectionToken } from '@angular/core';

function configOptionsFactory() {
  return Object.create(null);
}

export const CONFIG_OPTIONS = new InjectionToken('CONFIG_OPTIONS', {
  providedIn: 'root',
  factory: configOptionsFactory,
});
