import { Injectable } from '@angular/core';
import { BrowserService, WebWorkerService } from '@pinguin/common';

@Injectable({
  providedIn: 'root',
})
export class AppBrowserService extends BrowserService {
  public constructor(private readonly webWorkerService: WebWorkerService) {
    super();
  }

  public override ngBrowserInit(): void {
    this.webWorkerService.connect(
      '@pinguin-client/browser/app.browser.worker.ts',
      {},
    );
    // Execute runtime whether
    // browser environment is enabled.
    // TODO: implement in common module, it will allow us to listen any user events.
    // 1) `ServiceWorker` service
    // 2) `PushNotification` handlers.
  }
}
