import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppBrowserModule } from '@pinguin-client/browser/app.browser.module';
import { environment } from '@pinguin-runtime/environment';

if (environment.production) enableProdMode();

function bootstrap(): void {
  platformBrowserDynamic()
    .bootstrapModule(AppBrowserModule)
    .catch((err) => console.error(err));
}

if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}
