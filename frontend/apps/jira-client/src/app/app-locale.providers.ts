import { registerLocaleData } from '@angular/common';

import locale from '@angular/common/locales/en';
import extraLocale from '@angular/common/locales/extra/en';
import { TRANSLATIONS_FORMAT, ValueProvider } from '@angular/core';

export async function bootstrapLocaleModule(localeId: object): Promise<void> {
  registerLocaleData(locale, localeId, extraLocale);
}

export const TRANSLATIONS_FORMAT_PROVIDER: ValueProvider = {
  provide: TRANSLATIONS_FORMAT,
  useValue: 'xlf',
  multi: false,
};
