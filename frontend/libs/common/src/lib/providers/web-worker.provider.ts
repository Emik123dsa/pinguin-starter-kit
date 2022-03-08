import { ClassProvider, Provider } from '@angular/core';
import { WebWorkerService } from '../services';

export const WEB_WORKER_SERVICE_PROVIDER: ClassProvider = {
  provide: WebWorkerService,
  useClass: WebWorkerService,
  multi: false,
};

export const WEB_WORKER_PROVIDERS: Provider[] = [WEB_WORKER_SERVICE_PROVIDER];
