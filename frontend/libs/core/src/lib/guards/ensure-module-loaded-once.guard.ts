import { StringUtils } from '@pinguin/utils';

/**
 * Ensure that any module is being singleton and
 * import only once in the runtime.
 *
 * @export
 * @abstract
 * @class EnsureModuleLoadedOnceGuard
 * @typedef {EnsureModuleLoadedOnceGuard}
 */
export abstract class EnsureModuleLoadedOnceGuard<T> {
  /**
   * Creates an instance of EnsureModuleLoadedOnceGuard.
   * Check whether the module was initialized once per app.
   *
   * @constructor
   * @public
   * @param {?Constructor<any>} [targetModule]
   */
  public constructor(targetModule?: T) {
    if (targetModule) {
      // NOTE: ensure that generic wrapper is able to extend `Constructor` generic,
      // currently determined as an any.
      const errorMessage = StringUtils.format(
        '{name} has been already initialized. Import this module in AppBaseModule only.',
        (targetModule as any).constructor,
      );

      throw new ReferenceError(errorMessage);
    }
  }
}
