/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { TestBed } from '@angular/core/testing';
import { ClientTestingModule } from '@pinguin/testing';

import { ApiGatewayRequestInterceptor } from './api-gateway-request.interceptor';

describe('ApiGatewayRequestInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [ClientTestingModule],
      providers: [ApiGatewayRequestInterceptor],
    }),
  );

  it('should be created', () => {
    const interceptor: ApiGatewayRequestInterceptor = TestBed.inject(
      ApiGatewayRequestInterceptor,
    );
    expect(interceptor).toBeTruthy();
  });
});
