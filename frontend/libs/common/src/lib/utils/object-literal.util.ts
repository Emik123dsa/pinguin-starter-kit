/**
 * Object Literal as Tuple.
 *
 * @export
 * @interface ObjectLiteral
 * @typedef {ObjectLiteral}
 */
export interface PlainObjectLiteral<T = unknown> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: T;
}
