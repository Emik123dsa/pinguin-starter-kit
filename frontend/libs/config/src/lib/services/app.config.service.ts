import { BehaviorSubject, map, Observable } from 'rxjs';
import { ClientAppOptions } from '../interfaces';
import { ClientAppConfigRef } from '../classes';
import { ClientConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Abstract config service for specialized module context.
 *
 * @export
 * @abstract
 * @class ConfigService
 * @typedef {ConfigService}
 */
@Injectable({
  providedIn: 'platform',
})
export class ClientAppConfigService extends ClientConfigService<ClientAppOptions> {
  override readonly configUrl = this.appConfigRef.getConfigUrl();

  public constructor(
    private readonly httpClient: HttpClient,
    private readonly appConfigRef: ClientAppConfigRef,
  ) {
    super();
  }

  // public loadConfig() {}
}
