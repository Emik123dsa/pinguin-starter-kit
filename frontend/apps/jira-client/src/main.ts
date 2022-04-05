import {
  enableProdMode,
  MissingTranslationStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TRANSLATIONS_FORMAT_PROVIDER } from '@pinguin-client/app-locale.providers';

import { AppBrowserModule } from '@pinguin-client/browser/app.browser.module';
import { environment } from '@pinguin-runtime/environment';

if (environment.production) enableProdMode();

function bootstrap(): void {
  platformBrowserDynamic()
    .bootstrapModule(AppBrowserModule, {
      missingTranslation: MissingTranslationStrategy.Warning,
      providers: [TRANSLATIONS_FORMAT_PROVIDER],
      preserveWhitespaces: false,
      defaultEncapsulation: ViewEncapsulation.None,
    })
    .catch((err) => console.error(err));
}

if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}
