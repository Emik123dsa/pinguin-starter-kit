import { DeepPartial } from '@pinguin/utils';

/**
 * Abstract entity model for `models`.
 *
 * @export
 * @abstract
 * @class Entity
 * @typedef {Entity}
 */
export abstract class Entity {
  protected abstract get id(): string | number;

  [key: string]: unknown;

  public constructor(object?: DeepPartial<Entity>) {
    Object.assign(this, object);
  }
}
