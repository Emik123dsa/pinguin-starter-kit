import { Injectable, TypeDecorator } from '@angular/core';

/**
 * Service Injectable Decorator.
 *
 * @export
 * @returns {TypeDecorator}
 */
export function Service(): TypeDecorator {
  return Injectable({
    providedIn: 'root',
  });
}
