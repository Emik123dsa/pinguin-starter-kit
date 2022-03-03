import { NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';

/**
 * Ng hot module reference.
 *
 * @interface NgHotModuleRef
 * @typedef {NgHotModuleRef}
 * @template T = unknown
 */
interface NgHotModuleRef<T = unknown> extends NgModuleRef<T> {
  hot: { accept: () => void; dispose: (value: T) => void };
}

export const bootstrapModule = <T>(
  module: NgHotModuleRef,
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
