import { BehaviorSubject, map, Observable } from 'rxjs';
import { ClientApplicationOptions } from '../interfaces';
import { ClientApplicationConfigRef } from '../classes';
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
export class ClientApplicationConfigService extends ClientConfigService<ClientApplicationOptions> {
  override readonly configUrl = this.appConfigRef.getConfigUrl();

  public constructor(
    private readonly httpClient: HttpClient,
    private readonly appConfigRef: ClientApplicationConfigRef,
  ) {
    super();
  }

  // public loadConfig() {}
}
