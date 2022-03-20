import { registerLocaleData } from '@angular/common';

import locale from '@angular/common/locales/en-AE';
import extraLocale from '@angular/common/locales/extra/en';

export function bootstrapLocaleModule(localeId: object): void {
  registerLocaleData(locale, localeId, extraLocale);
}
