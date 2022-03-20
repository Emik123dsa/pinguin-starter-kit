import { Injectable } from '@angular/core';
import { BrowserService } from '@pinguin/common';

@Injectable({
  providedIn: 'root',
})
export class AppBrowserService extends BrowserService {
  public constructor() // private readonly clientCommonHandler: ClientCommonHandler,

  //private readonly webWorkerService: WebWorkerService,
  {
    super();
  }

  public override ngBrowserInit(): void {
    //console.log(this.clientCommonHandler);
    // Execute runtime whether
    // browser environment is enabled.
    // TODO: implement in common module, it will allow us to listen any user events.
    // 1) `ServiceWorker` service
    // 2) `PushNotification` handlers.
  }
}
