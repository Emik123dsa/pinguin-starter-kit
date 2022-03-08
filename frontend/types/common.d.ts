/**
 * Optional type resolver as nullable or by generic.
 *
 * @typedef {Optional}
 * @template T
 */
declare type Optional<T> = T | null;

/**
 * Closure function type without name provided.
 *
 * @typedef {Closure}
 * @template T = void
 */
declare type Closure<T = void> = () => T;

declare global {
  /**
   * Whether any String.format polyfill with override `callback`.
   *
   * @interface String
   * @typedef {String}
   */
  interface String {
    format(...replacements: string[]): string;
  }
}
