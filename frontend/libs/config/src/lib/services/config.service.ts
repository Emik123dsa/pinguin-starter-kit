import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigServiceModule } from './config-service.module';

/**
 * Abstract config service for specialized module context.
 * Will no longer provide any `providedIn` feature,
 * because all of the services will be provided by 'root' provider.
 *
 * @export
 * @abstract
 * @class ConfigService
 * @typedef {ConfigService}
 */
@Injectable({
  providedIn: ConfigServiceModule,
})
export abstract class ClientConfigService<T> implements OnDestroy {
  /**
   * Provide abstract `configUrl` in the case of
   * provided module or app reference.
   *
   * @protected
   * @abstract
   * @type {string}
   */
  protected abstract configUrl: Optional<string>;

  /**
   * Config subject will be used to configure the environment.
   *
   * @private
   * @readonly
   * @type {BehaviorSubject<T>}
   */
  protected readonly configSubject: BehaviorSubject<T> = new BehaviorSubject<T>(
    Object.create(null) as T,
  );

  public config$: Observable<T> = this.configSubject.asObservable();

  /**
   * Load application or module config
   * according to the `configUrl` reference.
   *
   * @public
   * @abstract
   */
  public loadConfig(): void {
    // if (StringUtils.isEmpty(this.configUrl)) {
    //   throw new
    // }
    // this.httpClient.jsonp(this.configUrl, 'callback').pipe(
    //   map((data) => {
    //     console.log(data);
    //   }),
    // );
  }

  /**
   * Return a config object as generic type of config.
   *
   * @public
   * @returns {T}
   */
  public getConfig(): T {
    return this.configSubject.getValue();
  }

  /**
   * Automatically release memory after
   * application was closed their context,
   * for instance, of module service.
   *
   * @public
   */
  public ngOnDestroy(): void {
    if (!this.configSubject.closed) {
      return this.configSubject.complete();
    }
  }
}
