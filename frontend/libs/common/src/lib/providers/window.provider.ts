import {
  isPlatformBrowser,
  isPlatformServer,
  isPlatformWorkerApp,
  isPlatformWorkerUi,
} from '@angular/common';
import {
  ClassProvider,
  FactoryProvider,
  PLATFORM_ID,
  Provider,
  Self,
  SkipSelf,
} from '@angular/core';

import * as format from 'string-format';
import { UnknownPlatformException } from '../exceptions';
import { ClientWindow } from '../interfaces';
import { WINDOW } from '../tokens';

/**
 * Window Reference.
 *
 * @export
 * @abstract
 * @class WindowRef
 * @typedef {WindowRef}
 */
export abstract class WindowRef {
  public getNativeWindow(): ClientWindow {
    throw new ReferenceError(
      format('{name} was not implemented or created yet', WindowRef),
    );
  }
}

/**
 * Browser Window Reference.
 *
 * @export
 * @class BrowserWindowRef
 * @typedef {BrowserWindowRef}
 * @extends {WindowRef}
 */
export class BrowserWindowRef extends WindowRef {
  /**
   * Creates an instance of BrowserWindowRef.
   *
   * @constructor
   * @public
   */
  public constructor() {
    super();
  }

  /**
   * Get Native Window.
   *
   * @public
   * @override
   * @returns {ClientWindow}
   */
  public override getNativeWindow(): ClientWindow {
    return window;
  }
}

/**
 * Browser Window Provider.
 *
 * @type {ClassProvider}
 */
const BROWSER_WINDOW_PROVIDER: ClassProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef,
  multi: false,
};

/**
 * Window Factory.
 *
 * @param {WindowRef} windowRef
 * @param {object} platformId
 * @throws {UnknownPlatformException} if platformId is not defined in the browser environment.
 * @returns {*}
 */
function windowProviderFactory(
  windowRef: WindowRef,
  platformId: object,
): ClientWindow {
  switch (true) {
    case isPlatformBrowser(platformId):
      return windowRef.getNativeWindow();
    case isPlatformServer(platformId):
      return Object.create(null);
    case isPlatformWorkerApp(platformId):
      return Object.create(null);
    case isPlatformWorkerUi(platformId):
      return Object.create(null);
    default:
      throw new UnknownPlatformException(
        format(
          'platform: {0} was not found in the client environment',
          platformId,
        ),
      );
  }
}

/**
 * Window Provider.
 *
 * @type {FactoryProvider}
 */
const WINDOW_PROVIDER: FactoryProvider = {
  provide: WINDOW,
  useFactory: windowProviderFactory,
  deps: [WindowRef, PLATFORM_ID],
  multi: false,
};

/**
 * Window Providers.
 *
 * @type {Provider[]}
 */
export const WINDOW_PROVIDERS: Provider[] = [
  BROWSER_WINDOW_PROVIDER,
  WINDOW_PROVIDER,
];
