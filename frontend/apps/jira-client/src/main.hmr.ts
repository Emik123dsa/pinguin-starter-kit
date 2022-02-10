import { NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';

export const hmrBootstrap = <T>(
  module: any,
  bootstrap: () => Promise<void | NgModuleRef<T>>,
) => {
  let ngModule: NgModuleRef<T>;
  module.hot.accept();
  bootstrap().then((mod) => (ngModule = mod as NgModuleRef<T>));
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map((c) => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
};
