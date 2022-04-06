/**
 * Response deserializer for `HttpEvent`,
 * it will allow this module to use any native methods
 * for deserializing JSON context in the response.
 *
 * @export
 * @abstract
 * @class HttpResponseDeserializer
 * @typedef {HttpResponseDeserializer}
 */
export abstract class HttpResponseDeserializer {
  abstract deserialize<T>(value: Optional<string>): Optional<T>;
}
