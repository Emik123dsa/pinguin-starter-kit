/**
 * Optional Type.
 *
 * @typedef {Optional}
 * @template T
 */
declare type Optional<T> = T | null;

declare global {
  interface String {
    format(...replacements: string[]): string;
  }
}
