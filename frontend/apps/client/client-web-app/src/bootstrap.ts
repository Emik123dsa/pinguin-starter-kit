import {
  CompilerOptions,
  enableProdMode,
  MissingTranslationStrategy,
  ViewEncapsulation,
} from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TRANSLATIONS_FORMAT_PROVIDER } from '@pinguin-client/app-locale.providers';

import { AppBrowserModule } from '@pinguin-client/browser/app.browser.module';
import { environment } from '@pinguin-web-client-runtime/environment';

if (environment.production) enableProdMode();

const compilerOptions: CompilerOptions | Array<CompilerOptions> = {
  missingTranslation: MissingTranslationStrategy.Warning,
  providers: [],
  preserveWhitespaces: false,
  defaultEncapsulation: ViewEncapsulation.Emulated,
};

function bootstrap(): void {
  platformBrowserDynamic([TRANSLATIONS_FORMAT_PROVIDER])
    .bootstrapModule(AppBrowserModule, compilerOptions)
    .catch((err) => console.error(err));
}

if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}
