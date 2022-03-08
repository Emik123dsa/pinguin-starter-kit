import { Subject, Subscriber } from 'rxjs';
import { WebWorkerEventTypes } from '../constants';

/**
 * Web worker connection options.
 *
 * @export
 * @interface WebWorkerOptions
 * @typedef {WebWorkerOptions}
 */
export interface WebWorkerOptions {
  workerUrl: string;
}

/**
 * Web worker event listener definition.
 *
 * @export
 * @interface WebWorkerEventListener
 * @typedef {WebWorkerEventListener}
 * @template T = unknown
 */
export interface WebWorkerEventListener<T = unknown> {
  name?: WebWorkerEventTypes;
  readonly stream?: Subject<T[]>;
  handler: (
    observer: Subscriber<T>,
  ) => (event: MessageEvent<T> & ErrorEvent) => void;
}
