import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebWorkerFactory {
  /**
   * Creates an instance of WebWorkerFactory.
   *
   * @constructor
   * @public
   * @param {Platform} platform
   */
  public constructor(private readonly platform: Platform) {}

  /**
   * Worker web factory, whether worker
   * is available only in browser runtime environment.
   *
   * @public
   * @param {string} scriptUrl
   * @param {WorkerOptions} [options={}]
   * @returns {(Worker | null)}
   */
  public createWorker(
    scriptUrl: URL,
    options?: WorkerOptions,
  ): Optional<Worker> {
    return this.isWorkerAvailable() ? new Worker(scriptUrl, options) : null;
  }

  /**
   * Check whether worker is available.
   *
   * @private
   * @returns {boolean}
   */
  private isWorkerAvailable(): boolean {
    return (
      this.platform.isBrowser &&
      typeof Worker !== 'undefined' &&
      Worker.prototype !== undefined
    );
  }
}
