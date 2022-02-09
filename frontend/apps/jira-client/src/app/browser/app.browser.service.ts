import { Injectable } from '@angular/core';
import { BrowserService } from '@pinguin/common';

@Injectable({
  providedIn: 'root',
})
export class AppBrowserService extends BrowserService {
  public override ngBrowserInit(): void {
    // Execute runtime whether
    // browser environment is enabled.
  }
}
