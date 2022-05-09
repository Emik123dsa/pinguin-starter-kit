import { StringUtils } from './string.util';

/**
 * Description placeholder
 *
 * @export
 * @param {?string} [path]
 * @returns {string}
 */
export function addLeadingSlash(path?: string): string {
  const leadingSlashCode = 47;
  const leadingSlashChar = String.fromCharCode(leadingSlashCode);

  return path && StringUtils.isString(path)
    ? Object.is(path.charCodeAt(0), leadingSlashCode)
      ? path
      : leadingSlashChar + path
    : StringUtils.EMPTY;
}
