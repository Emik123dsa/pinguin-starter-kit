export function assert(expr: unknown, message: string) {
  // eslint-disable-next-line no-extra-boolean-cast
  if (!Boolean(expr)) {
    throw new Error(message || 'unknown assertion error');
  }
}
