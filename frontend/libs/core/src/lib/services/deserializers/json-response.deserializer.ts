/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { ClientRestApiConfigRef } from '@pinguin/api';
import { PlainObjectLiteral, StringUtils } from '@pinguin/utils';
import { HttpResponseDeserializer } from './http-response.deserializer';

function noopReviver(key: string, value: unknown): void {
  /* TODO: should be implemented noop reviver for deserializer. */
}

/**
 * Simple implementation of the HttpResponseDeserializer with
 * `JSON.parse` browser supports.
 *
 * @export
 * @class JsonResponseDeserializer
 * @typedef {JsonResponseDeserializer}
 * @extends {HttpResponseDeserializer}
 */
@Injectable({
  providedIn: 'root',
})
export class JsonResponseDeserializer implements HttpResponseDeserializer {
  /**
   * Creates an instance of JsonResponseDeserializer.
   *
   * @constructor
   * @public
   * @param {ClientRestApiConfigRef} apiConfigRef
   */
  public constructor(private readonly apiConfigRef: ClientRestApiConfigRef) {}

  /**
   * Deserialize context whether value was provided.
   *
   * @public
   * @override
   * @template T
   * @param {Optional<string>} value
   * @returns {T}
   */
  public deserialize<T>(value: Optional<string>): Optional<T> {
    if (StringUtils.isEmpty(value)) {
      return null;
    }

    const deserializer: (
      data: string,
      reviver?: ((...args: any[]) => void) | undefined,
    ) => Optional<PlainObjectLiteral> = this.apiConfigRef.getDeserializer();

    return deserializer.call(null, value, noopReviver) as T;
  }
}
