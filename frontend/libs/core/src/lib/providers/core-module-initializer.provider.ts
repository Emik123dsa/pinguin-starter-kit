import { APP_INITIALIZER, ExistingProvider } from '@angular/core';
import { CORE_MODULE_INITIALIZER } from '../tokens';

export const CORE_MODULE_INITIALIZER_PROVIDER: ExistingProvider = {
  provide: APP_INITIALIZER,
  useExisting: CORE_MODULE_INITIALIZER,
  multi: true,
};
