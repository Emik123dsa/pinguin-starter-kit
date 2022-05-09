import { Injectable } from '@angular/core';
import {
  TransferState,
  makeStateKey,
  StateKey,
} from '@angular/platform-browser';

import { CoreManagerServiceModule } from './core-manager-service.module';

@Injectable({
  providedIn: CoreManagerServiceModule,
})
export class TransferStateManagerService {
  /**
   * Creates an instance of TransferStateManagerService.
   *
   * @constructor
   * @public
   * @param {TransferState} transferState
   */
  public constructor(private readonly transferState: TransferState) {}

  /**
   * Override default transfer state value by any key.
   *
   * @public
   * @template T
   * @param {string} key
   * @param {T} value
   */
  public setState<T>(key: string, value: T): void {
    return this.transferState.set<T>(this.toStateKey(key), value);
  }

  /**
   * Get current transfer state in generic wrapper.
   *
   * @public
   * @template T
   * @param {string} key
   * @param {T} [fallbackValue=Object.create(null) as T]
   * @returns {T}
   */
  public getState<T>(
    key: string,
    fallbackValue: T = Object.create(null) as T,
  ): T {
    const currentState: T = this.transferState.get<T>(
      this.toStateKey(key),
      fallbackValue,
    );
    this.transferState.remove<T>(this.toStateKey(key));
    return currentState;
  }

  /**
   * Check whether the given key is existing in the transfer state.
   *
   * @public
   * @template T
   * @param {string} key
   * @returns {boolean}
   */
  public hasState<T>(key: string): boolean {
    return this.transferState.hasKey<T>(this.toStateKey(key));
  }

  /**
   * Serialize context to json.
   *
   * @public
   * @returns {Readonly<string>}
   */
  public toJson(): Readonly<string> {
    return this.transferState.toJson();
  }

  /**
   * Convert default string key to key state manager wrapper.
   *
   * @private
   * @param {string} key
   * @returns {*}
   */
  private toStateKey<T = void>(key: string): StateKey<T> {
    return makeStateKey(key);
  }
}
